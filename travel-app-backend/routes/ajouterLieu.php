
<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["message" => "Méthode non autorisée"]);
    exit;
}

require_once __DIR__ . "/../config/db.php";

$nom = trim($_POST["nom"] ?? "");
$description = trim($_POST["description"] ?? "");
$idVille = filter_var(
    $_POST["id_ville"] ?? null,
    FILTER_VALIDATE_INT
);

if (
    $nom === "" ||
    $description === "" ||
    !$idVille ||
    !isset($_FILES["image"]) ||
    $_FILES["image"]["error"] !== UPLOAD_ERR_OK
) {
    http_response_code(400);
    echo json_encode([
        "message" => "Tous les champs sont obligatoires."
    ]);
    exit;
}

try {
    // Vérifier que la ville existe
    $stmt = $cnx->prepare(
        "SELECT id_ville FROM villes WHERE id_ville = ?"
    );
    $stmt->execute([$idVille]);

    if (!$stmt->fetch()) {
        http_response_code(400);
        echo json_encode([
            "message" => "La ville sélectionnée n'existe pas."
        ]);
        exit;
    }

    $image = $_FILES["image"];

    if ($image["size"] > 5 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode([
            "message" => "L'image doit être inférieure à 5 Mo."
        ]);
        exit;
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $type = $finfo->file($image["tmp_name"]);

    $extensions = [
        "image/jpeg" => "jpg",
        "image/png"  => "png",
        "image/webp" => "webp",
        "image/gif"  => "gif"
    ];

    if (!isset($extensions[$type])) {
        http_response_code(400);
        echo json_encode([
            "message" => "Format d'image non autorisé."
        ]);
        exit;
    }

    $dossier = __DIR__ . "/../uploads/";

    if (!is_dir($dossier) &&
        !mkdir($dossier, 0755, true)) {
        throw new Exception("Impossible de créer uploads");
    }

    $nomImage = bin2hex(random_bytes(16))
        . "." . $extensions[$type];

    $destination = $dossier . $nomImage;

    if (!move_uploaded_file(
        $image["tmp_name"],
        $destination
    )) {
        throw new Exception("Erreur lors de la sauvegarde");
    }

    $cheminImage = "uploads/" . $nomImage;

    $sql = "INSERT INTO lieux
            (nom, description, image, id_ville)
            VALUES (?, ?, ?, ?)";

    $stmt = $cnx->prepare($sql);
    $stmt->execute([
        $nom,
        $description,
        $cheminImage,
        $idVille
    ]);

    echo json_encode([
        "success" => true,
        "message" => "Lieu ajouté avec succès.",
        "lieu" => [
            "id_lieu" => $cnx->lastInsertId(),
            "nom" => $nom,
            "description" => $description,
            "image" => $cheminImage,
            "id_ville" => $idVille
        ]
    ]);

} catch (Exception $e) {
    if (isset($destination) && file_exists($destination)) {
        unlink($destination);
    }

    error_log($e->getMessage());

    http_response_code(500);
    echo json_encode([
        "message" => "Erreur lors de l'ajout du lieu."
    ]);
}
?>

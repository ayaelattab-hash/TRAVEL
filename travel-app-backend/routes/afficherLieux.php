
<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode(["message" => "Méthode non autorisée"]);
    exit;
}

require_once __DIR__ . "/../config/db.php";

$idVille = filter_var(
    $_GET["id_ville"] ?? null,
    FILTER_VALIDATE_INT
);

if (!$idVille || $idVille < 1) {
    http_response_code(400);
    echo json_encode(["message" => "ID ville invalide"]);
    exit;
}

try {
    $sql = "SELECT id_lieu, nom, description, image, id_ville
            FROM lieux
            WHERE id_ville = ?
            ORDER BY id_lieu DESC";

    $stmt = $cnx->prepare($sql);
    $stmt->execute([$idVille]);

    echo json_encode([
        "success" => true,
        "lieux" => $stmt->fetchAll()
    ]);
} catch (PDOException $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode([
        "message" => "Erreur lors du chargement des lieux."
    ]);
}
?>

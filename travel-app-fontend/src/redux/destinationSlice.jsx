
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. AFFICHER LES VILLES
export const fetchVilles = createAsyncThunk(
  "destinations/fetchVilles",
  async () => {
    const response = await fetch(
      "http://php.local/TRAVEL/travel-app-backend/routes/afficheVilles.php"
    );

    if (!response.ok) {
      throw new Error("Erreur lors du chargement des villes");
    }

    return await response.json();
  }
);

// 2. AJOUTER UNE VILLE
export const ajouterVille = createAsyncThunk(
  "destinations/ajouterVille",
  async (ville) => {
    const formData = new FormData();

    formData.append("nom", ville.nom);
    formData.append("pays", ville.pays);
    formData.append("description", ville.description);
    formData.append("image", ville.image);

    const response = await fetch(
      "http://php.local/TRAVEL/travel-app-backend/routes/ajouterVille.php",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erreur lors de l'ajout");
    }

    return data.ville;
  }
);

// 3. CREER LE SLICE
const destinationSlice = createSlice({
  name: "destinations",

  initialState: {
    villes: [],
    loading: false,
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Affichage
      .addCase(fetchVilles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchVilles.fulfilled, (state, action) => {
        state.loading = false;
        state.villes = action.payload;
      })

      .addCase(fetchVilles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Ajout
      .addCase(ajouterVille.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(ajouterVille.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload) {
          state.villes.push(action.payload);
        }
      })

      .addCase(ajouterVille.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default destinationSlice.reducer;

async function afficherDonneesAsync() {
    const ipPort = document.getElementById("ipPort").value.trim();

    if (!ipPort) {
    alert("Veuillez remplir tous les champs !");
    return;
    }

    try {
            const response = await fetch(`http://${ipPort}/`);

            if (!response.ok) {
                throw new Error("Reponse serveur invalide");
            }

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log("L'adresse", ipPort, "est invalide");
            console.error(error);
        }
}

async function loadPlayer() {
    
}
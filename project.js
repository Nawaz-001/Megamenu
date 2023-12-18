javascript
const dictionary = {
    term1: "Definition 1",
    term2: "Definition 2",
    term3: "Definition 3",
    term4: "Definition 4",
    term5: "Definition 5",
    term6: "Definition 6",
    term7: "Definition 7",
    term8: "Definition 8",
    term9: "Definition 9",
    term10: "Definition 10"
};

function searchDictionary() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = document.getElementById("searchResults");

    searchResults.innerHTML = "";

    for (const term in dictionary) {
        if (term.includes(searchTerm)) {
            const result = document.createElement("div");
            result.textContent = `${term}: ${dictionary[term]}`;
            searchResults.appendChild(result);
        }
    }
}
document.getElementById("downloadBtn").addEventListener("click", function () {
    const element = document.querySelector(".card-personnel"); // Select only the card

    // Get card width & height dynamically
    const cardWidth = element.offsetWidth;
    const cardHeight = element.offsetHeight;

    html2pdf()
        .set({
            margin: 5, // Small margin for spacing
            filename: "Mouad_Garroud_Info_Card.pdf",
            image: { type: "jpeg", quality: 1.0 }, // High-quality image
            html2canvas: { scale: 3, backgroundColor: null }, // High resolution
            jsPDF: { unit: "px", format: [cardWidth + 10, cardHeight + 10] } // Dynamic card size
        })
        .from(element)
        .save();
});

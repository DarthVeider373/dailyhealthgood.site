document.querySelectorAll(".checkout-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // TODO: substituir por integração de checkout real (ex: link de afiliado ou Pix).
    console.log("Checkout clicado, plano:", btn.dataset.plan);
    alert("Checkout ainda não configurado para o plano: " + btn.dataset.plan);
  });
});

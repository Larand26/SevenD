const itens = document.querySelectorAll(".car");

const update = () => {
  itens.forEach((item) => {
    let pos = parseInt(item.getAttribute("pos"));
    item.classList.remove("evidence");
    item.classList.remove("hide");
    if (pos === 1) item.classList.add("evidence");
    if (pos > 2) item.classList.add("hide");

    item.style.transform = `translate(${(pos - 1) * 200}%)`;

    // Atualiza a posição do item
    if (pos < itens.length - 1) {
      item.setAttribute("pos", `${pos + 1}`);
    } else {
      item.setAttribute("pos", "0");
    }
  });
};

// Corrigido: primeiro a função, depois o tempo
setInterval(update, 3000);

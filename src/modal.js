const newModal = document.createElement("div");
const main = document.querySelector("main");

newModal.classList.add("modal");
newModal.tabIndex = "-1";
newModal.id = "modal";
main.appendChild(newModal);

newModal.innerHTML = `<div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">MORPION</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>On continue le match ou on recommence le jeu ?</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">On continue</button>
                                    <button type="button" class="btn btn-primary" id="redemarrer" data-bs-dismiss="modal">Red&eacute;marrer</button>
                                </div>
                            </div>
                        </div>`;

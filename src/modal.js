const main=$("main");
const newModal= $(`<div class="modal">
                        <div class="modal-dialog" tabIndex = "-1">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title" id="modal-title"></h1>
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
                        </div>
                    </div>`        
                );
main.append(newModal);


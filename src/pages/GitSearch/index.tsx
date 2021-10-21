import "./styles.css";

const GitSearch = () => {
    return (
        <div className="git-search-container">
            <div className="git-search-card-container">
                <h1> Encontre um perfil Github</h1>

                <div className="container search-container">
                    <form>
                        <div className="form-container">
                            <input
                                type="text"
                                name="git"
                                className="search-input"
                                placeholder="Usuário Github"
                            />
                            <button type="submit" className="btn btn-primary search-button">
                                Encontrar
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default GitSearch;
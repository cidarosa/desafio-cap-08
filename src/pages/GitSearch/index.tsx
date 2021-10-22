import "./styles.css";

import { useState } from "react";
import ResultCard from 'components/ResultCard';

import axios from 'axios';

type FormData = {
    txtUser: string;
}

type GitUser = {
    url: string;
    followers: string;
    location: string;
    name: string;
    avatar_url: string;
}

const GitSearch = () => {

    const [gitUser, setGitUser] = useState<GitUser>();

    const [formData, setFormData] = useState<FormData>({
        txtUser: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios
            .get(`https://api.github.com/users/${formData.txtUser}`)
            .then((response) => {
                setGitUser(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                setGitUser(undefined);
                console.log(error);
            });
    }

    return (
        <div className="git-search-container">
            <div className="git-search-card-container">
                <h1> Encontre um perfil Github</h1>

                <div className="container search-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <input
                                type="text"
                                name="txtUser"
                                value={formData.txtUser}
                                className="search-input"
                                placeholder="Usuário Github"
                                onChange={handleChange}
                            />

                            <button type="submit" className="btn btn-primary search-button">
                                Encontrar
                            </button>
                        </div>
                    </form>



                </div>
            </div>
            <div className="container container-response">
                <div className="container-response-img" >
                    {gitUser &&
                        <>
                            <img src={gitUser.avatar_url} alt={gitUser.name} />
                        </>
                    }
                </div>

                <div className="container-response-data">
                   
                    {gitUser &&
                        <>
                         <h4>Informações</h4>
                            <ResultCard title="Perfil:" description={gitUser.url} />
                            <ResultCard title="Seguidores:" description={gitUser.followers} />
                            <ResultCard title="Localidade:" description={gitUser.location} />
                            <ResultCard title="Nome:" description={gitUser.name} />
                            <ResultCard title="Avatar:" description={gitUser.avatar_url} />
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default GitSearch;
import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}
const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [newError, setNewError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@gitExplorer:repositories',
        );
        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@gitExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handdleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
        if (!newRepo) {
            setNewError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);

            const repository = response.data;

            setRepositories([...repositories, repository]);
            setNewRepo('');
            setNewError('');
        } catch (err) {
            setNewError('Erro na busca do repositório');
        }
    }

    return (
        <>
            <img
                src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
                alt="GitHub Explorer.Logo"
            />
            <Title>Explore repositórios no Github</Title>
            <Form hasError={!!newError} onSubmit={handdleAddRepository}>
                <input
                    placeholder="Digite aqui"
                    value={newRepo}
                    onChange={event => setNewRepo(event.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>
            {newError && <Error>{newError}</Error>}
            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`/repositories/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={18} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;

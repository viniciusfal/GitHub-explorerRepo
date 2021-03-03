import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Header, RepositoryInfo, Issues, DatesOfRepository } from './styles';

interface RepositoryParams {
    repository: string;
}

interface DraftRepository {
    full_name: string;
    description: string;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
}
interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    };
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    const [repository, setRepository] = useState<DraftRepository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(response => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then(response => {
            setIssues(response.data);
        });
    }, [params.repository]);

    return (
        <>
            <Header>
                <img
                    src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
                    alt="GitHubExplorer"
                />
                <Link to="/">
                    <FiChevronLeft size={12} />
                    <span>Voltar</span>
                </Link>
            </Header>

            {repository && (
                <>
                    <RepositoryInfo>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <header>
                            <h1>{params.repository}</h1>
                            <p>{repository.description}</p>
                        </header>
                    </RepositoryInfo>

                    <DatesOfRepository>
                        <ul>
                            <li>
                                <strong>{repository.stargazers_count}</strong>
                                <span>stars</span>
                            </li>
                            <li>
                                <strong>{repository.forks_count}</strong>
                                <span>forks</span>
                            </li>
                            <li>
                                <strong>{repository.open_issues_count}</strong>
                                <span>issues abertas</span>
                            </li>
                        </ul>
                    </DatesOfRepository>
                </>
            )}

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;

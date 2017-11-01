import config from '../configuration';
import {Strategy as GitHubStrategy} from 'passport-github';

const createInstanceGitHubStrategy = ()=> {
    const options = config.get('github');
    const callback = (accessToken, refreshToken, profile, cb) => {
        // TODO findOneOrcreate user in db
        return cb(null, profile);
    };
    return new GitHubStrategy(options, callback);
};

export default createInstanceGitHubStrategy;

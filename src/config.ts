import { BuildType, Config } from './types/config';

const config: Config = {
    stateVersion: 0.2,
    BUILD_TYPE: BuildType.DEVELOPMENT,
    MAIN_API_URL: 'https://bloggy-api.herokuapp.com/'
};

export default config;

export enum BuildType {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development'
}

export interface Config {
    BUILD_TYPE: BuildType;
    stateVersion: number;
    MAIN_API_URL: string;
}

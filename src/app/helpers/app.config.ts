import { ProjectType } from "../domains/enums/project.type";

export class AppConfig {
    public static ApiUrl: string;
    public static ProjectType: ProjectType;

    public static getDomain() {
        let domain = '';
        if (document.location.ancestorOrigins && document.location.ancestorOrigins.length > 0) {
            domain = document.location.ancestorOrigins[0];
        }
        if (!domain) domain = document.location.href || document.referrer || document.location.origin;
        domain = domain.replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .split('/')[0];
        return domain.toLowerCase();
    }
    public static getProtocol() {
        return window.location.protocol;
    }
    public static setEnvironment() {
        let domain = this.getDomain();
        switch (domain) {
            case 'towerutility.co.uk':
                AppConfig.ProjectType = ProjectType.Production;
                AppConfig.ApiUrl = 'https://api.towerutility.co.uk:3001/api';
                break;
            default: {
                AppConfig.ProjectType = ProjectType.Dev;
                AppConfig.ApiUrl = 'http://localhost:27761/api';
            }
                break;
        }
    }
}

import { controller, httpGet, interfaces } from "inversify-express-utils";

@controller("/health")
export class HealthController implements interfaces.Controller {
    @httpGet("/")
    public get(): string {
        return "OK";
    }
}
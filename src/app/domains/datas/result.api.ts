import { ResultType } from '../enums/result.type';

export class ResultApi {
    public Object: any;
    public Type: ResultType;
    public Description: string;

    public constructor(type?: ResultType, object?: any, description?: string) {
        this.Object = object || null;
        this.Description = description || '';
        this.Type = type || ResultType.Success;
    }

    public static IsSuccess(result: any) {
        if (result) {
            let type = result.Type || result.type;
            return type == ResultType.Success;
        }
        return false;
    }

    public static ToObject(item: any): ResultApi {
        if (item) {
            return {
                Type: item.Type || item.type,
                Object: item.Object || item.object,
                Description: item.Description || item.description,
            };
        }
        return new ResultApi();
    }
    
    public static ToEntity(item?: any): ResultApi {
        if (item != null) {
            let obj = item;
            const entity: ResultApi = {
                Description: '',
                Object: obj || item,
                Type: ResultType.Success,
            };
            return entity;
        } else {
            const entity: ResultApi = {
                Object: null,
                Description: '',
                Type: ResultType.Success,
            };
            return entity;
        }
    }
    
    public static ToFail(error: string, obj?: any): ResultApi {
        const result: ResultApi = {
            Object: obj,
            Description: error,
            Type: ResultType.Fail,
        };
        return result;
    }
    
    public static ToException(error: any): ResultApi {
        let description: string = '';
        if (error && error.status == 0)
            description = 'The system connection has been interrupted, please try again later';

        const result: ResultApi = {
            Object: error,
            Type: ResultType.Exception,
            Description: description || error,
        };
        return result;
    }
}

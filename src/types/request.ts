// API RESPONSES

export type ResponseApi = {
    statusCode: number;
    message: string;
}

export type ResponseApiWithData = ResponseApi & {
    data: any;
};
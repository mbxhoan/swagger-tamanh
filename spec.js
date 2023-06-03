var spec =
{
    swagger: "2.0", 
    info: {
        description:
            "Dự án checkin sự kiện hợp tác giữa Delfi Technologies & Tam Anh Hospital",
        version: "2.0",    
        title: "Delfi Technologies & Tam Anh Hospital - Checkin App"
    },
    host: "https://api.checkin.delfi.vn", 
    basePath: "",   
    tags: [   
        {
            name: "client",                                   // Tên nhóm API
            description: "Các API về thông tin khách hàng",    // Mô tả về nhóm API
        }
    ],
    schemes: ["https"],    // Sử dụng scheme gì? HTTP, HTTPS?
    paths: {
        "/post-data-client": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["client"],
                summary: "Tạo dữ liệu khách hàng",
                description: "Tạo dữ liệu khách hàng",
                operationId: "postDataClient",
                consumes: ["multipart/form-data"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [       
                    {
                        "in": "header",
                        "name": "Accept",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "application/json"
                        },
                    },      
                    {
                        "in": "header",
                        "name": "Content-Type",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "application/json"
                        },
                    },      
                    {
                        "in": "header",
                        "name": "App-Key",
                        "description": "App Key (= API Key)",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "ezTURIfT5ksOx2uIRWYSsADIMv15a1mFrFTPs4myGBA"
                        },
                    },      
                    {
                        "in": "header",
                        "name": "User-Agent",
                        "description": "User",
                        "required": "true",
                        "schema": {
                            "type": "string",
                            "example": "PDA"
                        },
                    },      
                    {
                        "in": "body",      // Tham số được gửi lên từ form
                        "name": "body",    // Tên tham số
                        "required": "true",    // Tham số là bắt buộc
                        "description": "Các thông tin của 1 khách hàng thêm mới",
                        "schema": {
                            "$ref": "#/definitions/Client"
                        }
                    },
                ],
                responses: {
                    200: {
                        description: "Cập nhật thông tin khách hành thành công",
                        schema: {
                            $ref: "#/definitions/ApiResponse200" 
                        }
                    },
                    400: {
                        description: "Sai thông tin trường, Sai secret token, IP không hợp lệ, Lỗi cấu hình,...",
                        schema: {
                            $ref: "#/definitions/ApiResponse400"  
                        }
                    },
                    422: {
                        description: "Thiếu thông tin của trường quan trọng (securiry_token, event_code, name, email)",
                        schema: {
                            $ref: "#/definitions/ApiResponse422"  
                        }
                    },
                },
                security: [
                    
                ]
            }
        },
        // "/admin/{id}": {
        //     get: {
        //         tags: ["admin"],
        //         summary: "Lấy tài khoản admin theo id",
        //         description: "",
        //         operationId: "getAdminAccountByID",
        //         consumes: ["multipart/form-data"],
        //         produces: ["application/json"],
        //         parameters: [
        //             {
        //                 "in": "path",
        //                 "name": "id",
        //                 "required": "true",
        //                 "schema": {
        //                     "type": "integer",
        //                     "minimum": "1"
        //                 },
        //                 "description": "id của tài khoản admin"
        //             }
        //         ],
        //         responses: {
        //             200: {                                     // Mã trả về 200
        //                 description: "Lấy dữ liệu thành công",    // Mô tả kết quả trả về
        //                 schema: {
        //                     $ref: "#/definitions/admin"           // Dữ liệu trả về là đói tượng admin (tham chiếu với phần definitions ở cuối)
        //                 }
        //             },
        //         },
        //         security: [
                    
        //         ]
        //     },
        //     put: {
        //         tags: ["admin"],
        //         summary: "Đổi mật khẩu tài khoản admin theo id",
        //         description: "",
        //         operationId: "changePasswordAdminAccountByID",
        //         consumes: ["multipart/form-data"],
        //         produces: ["application/json"],
        //         parameters: [
        //             {
        //                 "in": "path",
        //                 "name": "id",
        //                 "required": "true",
        //                 "schema": {
        //                     "type": "integer",    // Kiểu tham số là số nguyên
        //                     "minimum": "1"        // Giá trị thấp nhất là 1
        //                 },
        //                 "description": "id của tài khoản admin"
        //             },
        //             {
        //                 "in": "formData",
        //                 "name": "password",
        //                 "required": "true",
        //                 "schema": {
        //                     "type": "string"
        //                 },
        //                 "description": "password mới của tài khoản admin"
        //             }
        //         ],
        //         responses: {
        //             200: {
        //                 description: "đổi mật khẩu thành công"
        //             },
        //         },
        //         security: [
                    
        //         ]
        //     }
        // }
    },
    // securityDefinitions: {    // Thông tin về api key sử dụng để thực hiện request
    //     api_key: {
    //         type: "apiKey",      // Thuộc loại api key xác thực
    //         name: "ezTURIfT5ksOx2uIRWYSsADIMv15a1mFrFTPs4myGBA",     // Tên trường chứa api key xác thực
    //         in: "header",        // API key được để trong phần header của request
    //     }
    // },
    definitions: {
        Client: {                
            type: "object",         
            properties: {       
                secret_token: {
                    type: "string",
                    example: "HF2tQU2e1deKdIzuetdR"
                },
                event_code: {
                    type: "string",
                    example: "TAMANH09_2023"
                },
                client: {
                    type: "object",
                    properties: {
                        order_id: {                 
                            type: "number",  
                            example: 43993
                        },
                        name: {
                            type: "string",
                            example: "Nguyễn Trần Nam"
                        },
                        email: {
                            type: "string",
                            example: "ntn@gmail.com"
                        },
                        phone: {                 
                            type: "number",  
                            example: "0902639xxx"
                        },
                        custom_fields: {
                            type: "object",
                            example: {
                                "prefix": "Mr",
                                "date_of_birth": "07/10/2001",
                                "work": "Delfi Technologies",
                                "profession": "IT",
                                "country": "Viet Nam",
                                "transaction_id": 14029115
                            }    
                        },
                    } 
                },
                
            }
        },
        ApiResponse200: {          
            type: "object",       
            properties: {      
                status: {
                    example: "success"   
                },
                status_code: {
                    example: "200"
                },
                message: {    
                    example: "Cập nhật thông tin khách hành thành công"
                },
                data: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number",
                            example: 4604
                        },
                        qrcode: {
                            type: "string",
                            example: "TAMANH09020623052541HR71P" 
                        },
                        ref_id: {
                            type: "number",
                            example: 43993 
                        },
                        name: {
                            type: "string",
                            example: "Nguyễn Trần Nam" 
                        },
                        phone: {           
                            type: "number",   
                            example: "0902639xxx"
                        },
                        email: {
                            type: "string",
                            example: "ntn@gmail.com"   
                        },
                        type: {
                            type: "string",
                            example: "NORMAL"   
                        },
                        status: {
                            type: "string",
                            example: "NEW"   
                        },
                        img_qrcode: {
                            type: "string",
                            example: ""   
                        },
                        document_pdf: {
                            type: "string",
                            example: ""   
                        },
                        avatar: {
                            type: "string",
                            example: ""   
                        },
                        checkin_count: {
                            type: "number",
                            example: 0 
                        },
                        custom_fields: {
                            type: "object",
                            example: {
                                "prefix": "Mr",
                                "date_of_birth": "07/10/2001",
                                "work": "Delfi Technologies",
                                "profession": "IT",
                                "country": "Viet Nam",
                                "transaction_id": 14029115  
                            }
                        }
                    }    
                },
            }
        },           
        ApiResponse400: {          
            type: "object",       
            properties: {      
                status: {
                    example: "error"   
                },
                status_code: {
                    example: "400"
                },
                message: {    
                    example: "Lỗi! Không tìm thấy sự kiện hoặc Sai dữ liệu. Vui lòng kiểm tra lại."
                },
                data: {
                    type: "object",
                    example: null 
                },
            }
        },           
        ApiResponse422: {          
            type: "object",       
            properties: {      
                status: {
                    example: "error"   
                },
                status_code: {
                    example: "422"
                },
                message: {    
                    type: "object",
                    properties: {
                        event_code: {
                            type: "array",
                            items: {
                                type: String,
                                example: "The event code field is required."
                            }
                        },
                        client_name: {
                            type: "array",
                            items: {
                                type: String,
                                example: "The client_name field is required."
                            }
                        },
                        client_email: {
                            type: "array",
                            items: {
                                type: String,
                                example: "The client_email field is required."
                            }
                        },
                    }
                },
                data: {
                    type: "object",
                    example: null 
                },
            }
        },       
    }
};

import Joi from "joi";

export const UpdateProductDto = Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().optional()
})

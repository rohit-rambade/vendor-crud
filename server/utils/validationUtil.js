import { body } from "express-validator";

export const vendorValidation = () => {
  return [
    body("vendorName").notEmpty().withMessage("Vendor Name is mandatory"),
    body("bankAccountNo")
      .notEmpty()
      .withMessage("Bank Account Number is mandatory"),
    body("bankName").notEmpty().withMessage("Bank Name is mandatory"),
    body("addressLine1").notEmpty().withMessage("Address Line 1 is mandatory"),
    body("addressLine2").notEmpty().withMessage("Address Line 2 is mandatory"),
  ];
};

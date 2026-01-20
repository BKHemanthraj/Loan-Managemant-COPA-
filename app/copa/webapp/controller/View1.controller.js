sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
    "use strict";

    return Controller.extend("copa.controller.View1", {
        onInit: function () {
            var oData = {
                nav: { mainKey: "agency" },
                agency: { cc: "", pt: "", bp: "" },
                num: { ind: "", rng: "", div: "", typ: "" },
                basic: { loanType: "" },
                analysis: {},
                org: {},
                ref: {},
                cond: {
                    cap: "",
                    items: [
                        { name: "A_Nominal int Fixed", effFrom: "", val: "", freq: "", dueOn: "" },
                        { name: "A_Annuity repayment", effFrom: "", val: "", freq: "", dueOn: "" },
                        { name: "A_Delinquency fee", effFrom: "", val: "", freq: "", dueOn: "" },
                        { name: "A_Delqncy fee-Statis", effFrom: "", val: "", freq: "", dueOn: "" },
                        { name: "A_Final repayment", effFrom: "", val: "", freq: "", dueOn: "" }
                    ]
                },
                effInt: {}
            };
            this.getView().setModel(new JSONModel(oData));
        },

        onPressNext: function () {
            var oModel = this.getView().getModel();
            var sCurrent = oModel.getProperty("/nav/mainKey");

            if (sCurrent === "agency") {
                oModel.setProperty("/nav/mainKey", "number");
            } else if (sCurrent === "number") {
                oModel.setProperty("/nav/mainKey", "basic");
            } else if (sCurrent === "basic") {
                oModel.setProperty("/nav/mainKey", "condition");
            }
        },

        onFinish: function () {
            MessageBox.success("Contract Offer Saved Successfully!");
        }
    });
});
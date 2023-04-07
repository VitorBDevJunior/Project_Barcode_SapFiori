/*global QUnit*/

sap.ui.define([
	"consulta_produtos/controller/Screen.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Screen Controller");

	QUnit.test("I should test the Screen controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');
const feedbackController = require('../src/feedback/feedbackController');
const offerController = require('../src/offer/offerController');
const serviceController = require('../src/service/serviceController');

router.route('/user/create').post(userController.UserRegisterFn);
router.route('/user/login').post(userController.userLoginControllerfn);
router.route('/user/getAll').get(userController.getDatafn);
router.route('/user/delete/:id').delete(userController.deleteUserfn);
 
router.route('/feedback/getAll').get(feedbackController.getDataFeedbackfn);
router.route('/feedback/create').post(feedbackController.FeedbackControllerFn);
router.route('/feedback/delete/:id').delete(feedbackController.deleteFeedbackfn);

router.route('/service/getAll').get(serviceController.getServicefn);
router.route('/service/create').post(serviceController.createServicefn);
router.route('/service/delete/:id').delete(serviceController.removeServicefn);


router.route('/offer/getAll').get(offerController.getOfferDetailfn);
router.route('/offer/create').post(offerController.createOfferDetailfn);
router.route('/offer/delete/:id').delete(offerController.removeOfferDetailfn);

module.exports = router;
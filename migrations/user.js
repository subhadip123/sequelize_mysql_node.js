'use strict';
module.exports = {
    up:(queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fullName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            username: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            phoneNo: {
                type: Sequelize.BIGINT,
                allowNull: true
            },
            phone_otp: {
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            phone_verified: {
                defaultValue: 0, /*1=Verified, 0=Not verified*/
                type: Sequelize.INTEGER
            },
            dob: {
                type: Sequelize.DATE,
                allowNull: true
            },
            email:{
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email_otp: {
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            userType: {
                type: Sequelize.ENUM('1','2','3'), /*1=Admin, 2=Artist, 3=Fans,*/
                allowNull: false
            },
            userStatus: {
                type: Sequelize.ENUM('1', '2', '3', '4', '5'), /*1=Verified, 2=Non-verified, 3=Deleted, 4=Admin not verified, 5=Blocked by admin,*/
                defaultValue: '2'
                /*defaultValue: '1'*/
            },
            gender: {
                type: Sequelize.ENUM('1', '2', '3'), /*1=Not mentioned, 2=Male, 3=Female*/
                defaultValue: '1'
            },
            isOnline: {
                type: Sequelize.ENUM('0', '1', '2'), /*0=Offline, 1=Online, 2=Do not disturb,*/
                defaultValue: '0'
            },
            signedType: {
                type: Sequelize.ENUM('0', '1', '2'), /*0=Unsigned, 1=Signed, 2=not mentioned,*/
                defaultValue: '0'
            },
            prefferedChannel: {
                type: Sequelize.ENUM,
                values: ['0', '1', '2'], /*0=None, 1=Youtube, 2=Vimeo,*/
                defaultValue: '0'
            },
            channelName: {
                type: Sequelize.STRING,
                allowNull: true
            },
            address:{
                type: Sequelize.STRING,
                allowNull: true
            },
            country:{
                type: Sequelize.STRING,
                allowNull: true
            },
            state:{
                type: Sequelize.STRING,
                allowNull: true
            },
            city:{
                type: Sequelize.STRING,
                allowNull: true
            },
            latitude:{
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            longitude:{
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            socialMediaFollowing:{
                type: Sequelize.INTEGER,
                defaultValue: 0
            }, /*0=None, 1=Under 5K, 2=5K-100K, 3=100K-1M, 4=1M+(Answer can be any except under 5K)*/
            profilePicture:{
                type: Sequelize.STRING,
                allowNull: true
            },
            coverPicture:{
                type: Sequelize.STRING,
                allowNull: true
            },
            countLikes:{
                type: Sequelize.INTEGER,
                defaultValue:0
            },
            countLoves:{
                type: Sequelize.INTEGER,
                defaultValue:0
            },
            promotionalVideoUploaded:{
                type: Sequelize.STRING(1),
                defaultValue:'N' // N=No, Y=Yes
            },
            introductionVideoUploaded:{
                type: Sequelize.STRING(1),
                defaultValue:'N' // N=No, Y=Yes
            },
            accomplishmentFileUploaded:{
                type: Sequelize.STRING(1),
                defaultValue:'N' // N=No, Y=Yes
            },
            isFlagged:{
                type: Sequelize.STRING(1),
                defaultValue:'N' // N=No, Y=Yes
            },
            countFollowers:{
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            countSocialFollowers:{
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            socialFollowersType:{
                type: Sequelize.SMALLINT,
                defaultValue: 0
            },
            copyrightHolder: {
                type: Sequelize.STRING,
                allowNull: true
            },
            stripeId: {
                type: Sequelize.STRING,
                allowNull: true
            },
            isFake: {
                type: Sequelize.SMALLINT,
                defaultValue: 0
            },
            isMember: {
                type: Sequelize.SMALLINT,
                defaultValue: 0
            },
            defaultCardId: {
                type: Sequelize.STRING,
                allowNull: true
            },
            isContestant: {
                type: Sequelize.SMALLINT,
                defaultValue: 0
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
        .then(() => queryInterface.addIndex('Users', ['id']))
        .then(() => queryInterface.addIndex('Users', ['fullName']))
        .then(() => queryInterface.addIndex('Users', ['username']))
        .then(() => queryInterface.addIndex('Users', ['email']))
        .then(() => queryInterface.addIndex('Users', ['userType']))
        .then(() => queryInterface.addIndex('Users', ['userStatus']))
        .then(() => queryInterface.addIndex('Users', ['signedType']))
        .then(() => queryInterface.addIndex('Users', ['socialMediaFollowing']))
        .then(() => queryInterface.addIndex('Users', ['totalLikes']))
        .then(() => queryInterface.addIndex('Users', ['stripeId']))
        ;
    },
    down:(queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};
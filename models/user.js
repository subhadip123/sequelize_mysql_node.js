'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        phoneNo: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        phone_otp: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        phone_verified: {
            defaultValue: 0, /*1=Verified, 0=Not verified*/
            type: DataTypes.INTEGER
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_otp: {
            defaultValue: 0,
            type: DataTypes.INTEGER
        },
        userType: {
            type: DataTypes.ENUM,
            values: ['1', '2', '3'], /*1=Admin, 2=Artist, 3=Fans,*/
            allowNull: false
        },
        userStatus: {
            type: DataTypes.ENUM,
            values: ['1', '2', '3', '4', '5'], /*1=Verified, 2=Non-verified, 3=Deleted, 4=Admin not verified, 5=Blocked by admin,*/
            defaultValue: '2'
            /*defaultValue: '1'*/
        },
        gender: {
            type: DataTypes.ENUM('1', '2', '3'), /*1=Not mentioned, 2=Male, 3=Female*/
            defaultValue: '1'
        },
        isOnline: {
            type: DataTypes.ENUM,
            values: ['0', '1', '2'], /*0=Offline, 1=Online, 2=Do not disturb,*/
            defaultValue: '0'
        },
        signedType: {
            type: DataTypes.ENUM,
            values: ['0', '1', '2'], /*0=None, 1=Unsigned, 2=Signed,*/
            defaultValue: '0'
        },
        prefferedChannel: {
            type: DataTypes.ENUM,
            values: ['0', '1', '2'], /*0=None, 1=Youtube, 2=Vimeo,*/
            defaultValue: '0'
        },
        channelName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        copyrightHolder: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stripeId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true
        },
        country:{
            type: DataTypes.STRING,
            allowNull: true
        },
        state:{
            type: DataTypes.STRING,
            allowNull: true
        },
        city:{
            type: DataTypes.STRING,
            allowNull: true
        },
        latitude:{
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        longitude:{
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        socialMediaFollowing:{
            type: DataTypes.INTEGER, /*0=None, 1=Under 5K, 2=5K-100K, 3=100K-1M, 4=1M+(Answer can be any except under 5K)*/
            defaultValue: 0
        },
        profilePicture:{
            type: DataTypes.STRING,
            allowNull: true
        },
        coverPicture:{
            type: DataTypes.STRING,
            allowNull: true
        },
        countLikes:{
            type: DataTypes.INTEGER,
            defaultValue:0
        },
        countLoves:{
            type: DataTypes.INTEGER,
            defaultValue:0
        },
        promotionalVideoUploaded:{
            type: DataTypes.STRING,
            defaultValue:'N'
        },
        introductionVideoUploaded:{
            type: DataTypes.STRING,
            defaultValue:'N'
        },
        accomplishmentFileUploaded:{
            type: DataTypes.STRING,
            defaultValue:'N'
        },
        isFlagged:{
            type: DataTypes.STRING(1),
            defaultValue:'N' // N=No, Y=Yes
        },
        countFollowers:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        countSocialFollowers:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        socialFollowersType:{
            type: DataTypes.SMALLINT,
            defaultValue: 0
        },
        isFake: {
            type: DataTypes.SMALLINT,
            defaultValue: 0
        },
        isMember: {
            type: DataTypes.SMALLINT,
            defaultValue: 0
        },
        defaultCardId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isContestant: {
            type: DataTypes.SMALLINT,
            defaultValue: 0
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {});
    User.associate = function(models) {
        User.hasMany(models.UserRegistrationAnswer, {foreignKey: 'userId', sourceKey: 'id'});
       
      };

    User.isEmailUnique = function(email) {
        User.count({ where: { email: email } }).then(count => {
            if(count)
            {
                //console.log('Exists!');
                return true;
            }
            //console.log('Not Exists!');
            return false;
        });
    }
    return User;

};
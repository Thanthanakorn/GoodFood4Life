import React, {useState} from 'react';
import { TouchableOpacity, View} from "react-native";
import {Formik} from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle,
    StyledFormArea, StyledInputLabel, StyledTextInput, LeftIcon, Colors,
    StyledButton, ButtonText, RightIcon, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent
} from "../components/styles";

const {brand, darkLight, primary, white} = Colors;

const LoginPage = () => {
    const [hidePassword, setHidePassword] = useState(true);
    // @ts-ignore
    return (
        <StyledContainer>
            <InnerContainer style={{padding: 30}}>
                <PageLogo resizeMode="cover" source={require('../../assets/icon.png')}/>
                <PageTitle>GoodFood4Life</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="Your email"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address" isPassword={undefined} hidePassword={undefined}
                                setHidePassword={undefined}/>

                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="Your Password"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />

                            <MsgBox>...</MsgBox>

                            <StyledButton onPress={() => handleSubmit()}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>

                            <TouchableOpacity style={{padding: 2}}>
                                <ButtonText>Forgot Password?</ButtonText>
                            </TouchableOpacity>

                            <Line/>

                            <StyledButton google = {true} onPress={() => handleSubmit()}>
                                    <Fontisto name="google" color={white} size={25}/>
                                    <ButtonText google = {true}>Sign in with Google</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account already? </ExtraText>
                                <TextLinkContent>Signup</TextLinkContent>
                            </ExtraView>


                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>

    );
};

// @ts-ignore
const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "eye-off" : "eye"} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default LoginPage;

import React, {useState} from 'react';
import { View } from "react-native";
import {Formik} from 'formik';
import {Octicons, Ionicons} from '@expo/vector-icons';

import {
    StyledContainer, InnerContainer, PageTitle,
    StyledFormArea, StyledInputLabel, StyledTextInput, LeftIcon, Colors,
    StyledButton, ButtonText, RightIcon, MsgBox, Line, ExtraView, ExtraText, TextLinkContent
} from "../components/styles";

const {brand, darkLight} = Colors;

const SignUpPage = () => {
    const [hidePassword, setHidePassword] = useState(true);


    // @ts-ignore
    return (
        <StyledContainer>
            <InnerContainer style={{padding: 30}}>
                <PageTitle style={{paddingBottom: 30}}>Sign Up</PageTitle>

                <Formik
                    initialValues={{
                        fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''
                        }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Full Name"
                                icon="person"
                                placeholder="Your name"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                                isPassword={false}
                                hidePassword={false}
                                setHidePassword={false}
                            />

                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="Your email"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                isPassword={false}
                                hidePassword={false}
                                setHidePassword={false}
                            />


                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="Password"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />

                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="Password"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />

                            <MsgBox>...</MsgBox>

                            <StyledButton onPress={() => handleSubmit()}>
                                <ButtonText>Sign up</ButtonText>
                            </StyledButton>

                            <Line/>

                            <ExtraView>
                                <ExtraText>Have an account already? </ExtraText>
                                <TextLinkContent>Log in</TextLinkContent>
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
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? "eye-off" : "eye"} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default SignUpPage;

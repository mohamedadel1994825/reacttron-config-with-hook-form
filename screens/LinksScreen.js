import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useForm, Controller } from "react-hook-form";
import { CheckBox } from "react-native-elements";
import { RHFInput } from "react-hook-form-input";
import Reactotron from 'reactotron-react-native'
export default function LinksScreen() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    unregister,
    clearError,
    errors,
    control,
  } = useForm({
    // defaultValues: {
    //   yes: false,
    // },
  });
  const watchYes = watch("yes"); // you can supply default value as second argument
  const onSubmit = (data) => {
    Alert.alert("data", JSON.stringify(data));
    // clearError('firstName')
    // register("firstName")
  };
  const onChecked = () => {
    setValue("yes", !watchYes);
    // Reactotron.log('hello rendering world')
    Reactotron.warn('*glares*')
    Reactotron.error('Now you\'ve done it.')
    // Reactotron.display({
    //   name: 'KNOCK KNOCK',
    //   preview: 'Who\'s there?',
    //   value: 'Orange.'
    // })
  };
  // useEffect(() => {
  //   register({ name: 'firstName'},{ required: true});
  //   register({ name: 'lastName'});
  //   register({ name: 'yes'});
  // }, [register]);
  return (
    // <ScrollView
    //   style={styles.container}
    //   contentContainerStyle={styles.contentContainer}
    // >
      // <View>
      //   <Text>First Name</Text>
      //   <TextInput
      //     name="firstName"
      //     placeholder="bill"
      //     ref={register({ name: 'firstName'},{minLength:1},{ required: true})}
      //     onChangeText={text => setValue('firstName', text,true)
      //   }
      //     />
      // {errors.firstName&& <Text>This is required.</Text>}
      //   <Text>Last Name</Text>
      //   <TextInput
      //     name="lastName"
      //     placeholder="luo"
      //     onChangeText={(text) => {
      //       setValue("lastName", text);
      //     }}
      //   />
      //   <Text>Email</Text>
      //   <TextInput
      //     name="email"
      //     placeholder="bluebill1049@hotmail.com"
      //     type="email"
      //     onChangeText={(text) => {
      //       setValue("email", text);
      //     }}
      //   />
      //   <RHFInput
      //     as={<CheckBox
      //       checked={watchYes}
      //       onPress={onChecked}
      //     />}
      //     // onChangeEvent={onChecked}
      //     name="yes"
      //     register={register}
      //     setValue={setValue}
      //     defaultValue={false}
      //   />
      //   {watchYes && <Text>Is developer?</Text>}
      //   {/* <TextInput name="isDeveloper" type="checkbox" ref={register} /> */}
      //   <Button title="SUBMIT" onPress={handleSubmit(onSubmit)} />
      // </View>
    // </ScrollView>
    <View>
      <Text>First name</Text>
      <Controller
        as={TextInput}
        control={control}
        name="firstName"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>Last name</Text>
      <Controller
        as={TextInput}
        control={control}
        name="lastName"
        onChange={(args) => args[0].nativeEvent.text}
        defaultValue=""
      />
      <Controller
        as={<CheckBox checked={watchYes} onPress={onChecked} />}
        control={control}
        name="yes"
        // onChange={(args) => args[0].nativeEvent.text}
        defaultValue={false}
      />
      {/* <RHFInput
          as={<CheckBox 
            checked={watchYes}
            onPress={onChecked}
          />}
          // onChangeEvent={onChecked}
          name="yes"
          register={register}
          setValue={setValue}
        /> */}
      {watchYes && <Text>Is developer?</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});

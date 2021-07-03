import {
  FlexColumn,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import { ErrorMessage, Input } from "../../User/LoginPage/LoginPage.Styles";
import { Form, Formik } from "formik";
import { updateProfileSchema } from "../../../Valedation";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAction } from "../../../Redux/User/userActions";
import Button from "../../../Components/Button/Button";

export default function UpdateProfilePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;
  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(updateProfileAction(values, history));
  };

  return (
    <FlexColumn color={"#fff"}>
      <InnerSection style={{ alignItems: "start", width: "30%" }}>
        <FlexColumn>
          <Typography fontSize={60} fontWeight={"bold"}>
            My Profile
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
              passwordConfirmation: "",
              name: "",
            }}
            validationSchema={updateProfileSchema()}
            onSubmit={handleSaveChanges}
          >
            {({ errors, touched }) => {
              return (
                <Form
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <Input name={"name"} type={"name"} placeholder={"Name"} />
                  {errors.name && touched.name ? (
                    <ErrorMessage>{errors.name}</ErrorMessage>
                  ) : null}

                  <Input name={"email"} type={"email"} placeholder={"Email"} />
                  {errors.email && touched.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : null}

                  <Input
                    name={"password"}
                    type={"password"}
                    placeholder={"password"}
                  />
                  {errors.password && touched.password ? (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  ) : null}

                  <Input
                    name={"passwordConfirmation"}
                    type={"password"}
                    placeholder={"Confirmation password"}
                  />
                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
                  ) : null}

                  {error ? <ErrorMessage>{error}</ErrorMessage> : null}

                  <Button
                    style={{ padding: "10px" }}
                    text={"Update Profile"}
                    isLoading={isLoading}
                    width={"100%"}
                    borderRadius={6}
                  />
                </Form>
              );
            }}
          </Formik>
        </FlexColumn>
      </InnerSection>
    </FlexColumn>
  );
}

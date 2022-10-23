import { useForm, FieldErrors } from "react-hook-form";

type IContactFormRowProps = {
  Name: string;
  Id: string;
  placeholder?: string;
  description?: string;
  inputType?: string;
  input?: any;
  register?: any;
  required?: boolean;
  errors?: FieldErrors;
};

type IContactFormRowInputProps = {
  Id: string;
  Name: string;
  placeholder?: string;
  inputType: string;
  register?: any;
  required?: boolean;
  errors?: FieldErrors;
};

type Inputs = {
  fullName: string;
  email: string;
  phone: string;
  interestedAreas: string;
  additionalInfo: string;
};

const ContactFormInput = (props: IContactFormRowInputProps) => {
  return (
    <>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={props.Id}
        name={props.Id}
        type={props.inputType}
        placeholder={props.placeholder}
        {...props.register(props.Id, { required: props.required })}
      ></input>
      {props.errors &&
        props.errors[props.Id]?.type === "required" &&
        `${props.Name} is required`}
    </>
  );
};

const ContactFormRow = (props: IContactFormRowProps) => {
  const input = props.inputType ? (
    <ContactFormInput
      Id={props.Id}
      Name={props.Name}
      inputType={props.inputType}
      placeholder={props.placeholder}
      register={props.register}
      required={props.required}
      errors={props.errors}
    />
  ) : (
    props.input
  );
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={props.Id}>
        {props.Name}
      </label>
      {input}
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    formState: { errors, isDirty },
  } = useForm<Inputs>({
    mode: "onTouched",
  });
  return (
    <>
      <p>Submit you're information and we'll get back to you in short order.</p>
      <form
        name="contact"
        id="contact"
        method="POST"
        data-netlify="true"
        className="sm:w-1/2 mx-auto text-left"
      >
        <ContactFormRow
          Id="fullName"
          Name="Full Name"
          inputType="text"
          placeholder="John Max"
          register={register}
          required={true}
          errors={errors}
        />
        <ContactFormRow
          Id="email"
          Name="Email"
          inputType="email"
          placeholder="jm@email.com"
          register={register}
          required={true}
          errors={errors}
        />
        <ContactFormRow
          Id="phone"
          Name="Phone"
          inputType="phone"
          placeholder="111-111-1111"
          register={register}
          required={false}
          errors={errors}
        />
        <ContactFormRow
          Id="interestedAreas"
          Name="Areas interested in"
          inputType="text"
          placeholder="Portland, Beaverton, etc"
          register={register}
          required={false}
          errors={errors}
        />
        <ContactFormRow
          Id="additionalInfo"
          Name="Additional information"
          input={
            <textarea
              className="shadow appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              id="additionalInfo"
              // @ts-ignore
              name="additionalInfo"
              rows={5}
              placeholder="Any other conditions you want applied to your leads."
              {...register("additionalInfo")}
            ></textarea>
          }
        />
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              !isDirty || (!!errors && (!!errors?.fullName || !!errors?.email))
            }
            className="disabled:opacity-75 shadow bg-primary-500 hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export { ContactForm };

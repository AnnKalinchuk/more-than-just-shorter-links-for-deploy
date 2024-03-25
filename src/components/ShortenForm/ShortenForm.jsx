import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./ShortenForm.scss";
import createShortLink from "../../service/LinksService";
import { useLinks } from "../context/LinksContext";

const ShortenForm = () => {
  const { isLoading, setIsLoading, links, setLinks } = useLinks();

  const LinkValidationSchema = Yup.object().shape({
    longLink: Yup.string()
      .url("Link must be a valid URL")
      .required("Please add a link"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(LinkValidationSchema),
  });

  const handleShotrtenLink = async (longLink) => {
    setIsLoading(true);
    try {
      const response = await createShortLink(longLink);
      const link = {
        longLink,
        shortLink: response,
      };
      setLinks([...links, link]);
    } catch (e) {
      console.error("Error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    try {
      handleShotrtenLink(data.longLink);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__body">
        <label>
          <input
            type="text"
            {...register("longLink")}
            className={errors.longLink ? "error" : ""}
            placeholder="Shorten a link here..."
            style={{
              border: errors.longLink ? "2px solid red" : "",
            }}
          />
          {errors.longLink && <span>{errors?.longLink?.message}</span>}
        </label>
        <button type="submit" disabled={!isValid || isLoading}>
          Shorten it!
        </button>
      </div>
    </form>
  );
};

export default ShortenForm;

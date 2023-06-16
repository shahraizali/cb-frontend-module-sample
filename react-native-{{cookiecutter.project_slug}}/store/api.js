import axios from "axios";

const {{cookiecutter.camel_case_name}}API = axios.create({
  baseURL: "https://app.botics.co/modules/{{cookiecutter.project_slug}}",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export function {{cookiecutter.camel_case_name}}List() {
  return {{cookiecutter.camel_case_name}}API.get("/{{cookiecutter.project_slug}}/");
}

export const api = {
  {{cookiecutter.camel_case_name}}List,
};
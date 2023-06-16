import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";

export const {{cookiecutter.camel_case_name}}List = createAsyncThunk(
  "{{cookiecutter.project_slug}}/{{cookiecutter.camel_case_name}}List",
  async () => {
    const response = await api.{{cookiecutter.camel_case_name}}List();
    return response.data;
  }
);

const initialState = { {{cookiecutter.project_slug}}: {}, api: { loading: "idle", error: null } };

export const slice = createSlice({
  name: "{{cookiecutter.camel_case_name}}",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [{{cookiecutter.camel_case_name}}List.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
      }
    },
    [{{cookiecutter.camel_case_name}}List.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        action.payload.map((obj) => {
          state.{{cookiecutter.camel_case_name}}[obj.id] = obj;
          return obj;
        });
        state.api.loading = "idle";
      }
    },
    [{{cookiecutter.camel_case_name}}List.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
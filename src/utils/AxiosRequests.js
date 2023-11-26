import axios from "axios";
import { arc } from "d3-shape";
import { async } from "q";

const baseURL = `http://localhost:${process.env.REACT_APP_PORT}`;

const fetchBalanceData = async (userId) => {
  try {
    const { data } = await axios.get(
      `${baseURL}/accounts/connections/${userId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const fetchWeeklySpend = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/transactions/weekly`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const addMessage = async (bodyObj, threadId) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8080/threads/${threadId}/message`,
      bodyObj
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const getRunStatus = async (threadId, runId) => {
  try {
    const { data } = await axios.get(`${baseURL}/threads/${threadId}/${runId}`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const fetchMessageList = async (threadId) => {
  try {
    const { data } = await axios.get(`${baseURL}/threads/${threadId}/message`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const runThread = async (threadId, assistantObj) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/threads/${threadId}/run`,
      assistantObj
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export {
  fetchBalanceData,
  fetchWeeklySpend,
  getRunStatus,
  addMessage,
  fetchMessageList,
  runThread,
};

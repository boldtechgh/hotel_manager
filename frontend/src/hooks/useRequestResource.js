import axios from "axios";
import { useCallback, useState } from "react";
import { useTokens } from "../context/TokensContext";

const useRequestResource = ({ endpoint, tokens = null, label = "" }) => {
  const [resourceList, setResourceList] = useState({ results: [] });
  const [resourceCounts, setResourceCounts] = useState(null);
  const { setTokens } = useTokens();

  const getTokens = useCallback(
    (values) => {
      axios
        .post(`api/${endpoint}/`, values)
        .then((res) => {
          setTokens(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [endpoint, setTokens]
  );

  const getResourceCounts = useCallback(() => {
    axios
      .get(`/api/${endpoint}/`)
      .then((res) => {
        const { data } = res;
        setResourceCounts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [endpoint]);

  const getResourceList = useCallback(() => {
    axios
      .get(`/api/${endpoint}/`)
      .then((res) => {
        setResourceList({
          results: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [endpoint]);

  return {
    resourceList,
    getResourceList,
    resourceCounts,
    getResourceCounts,
    getTokens,
  };
};

export default useRequestResource;

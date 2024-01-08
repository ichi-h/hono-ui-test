import { APIResult } from "@/api/result";
import { GetFilteredWorksResponse, getFilteredWorks } from "@/api/works/filter";
import { Update, createUpdate } from "@/utils/elmish";

import { Message, Model } from "./data";

const update = (
  model: Model,
  message: Message,
): ReturnType<Update<Model, Message>> => {
  switch (message.type) {
    case "setOffset": {
      return update(
        {
          ...model,
          offset: message.offset,
        },
        { type: "getFilteredWorks" },
      );
    }

    case "setSearch": {
      return update(
        {
          ...model,
          search: message.search,
          offset: 0,
        },
        { type: "getFilteredWorks" },
      );
    }

    case "setCategory": {
      return update(
        {
          ...model,
          category: message.category,
          offset: 0,
        },
        { type: "getFilteredWorks" },
      );
    }

    case "getFilteredWorks": {
      const newModel: Model = {
        ...model,
        worksLoader: "loading",
      };

      return {
        newModel,
        cmd: () => {
          const onReceived = (
            resp: APIResult<GetFilteredWorksResponse>,
          ): Message => {
            return {
              type: "getFilteredWorksResp",
              resp,
            };
          };

          return getFilteredWorks(
            {
              search: newModel.search,
              category: newModel.category ?? undefined,
              offset: newModel.offset,
              limit: newModel.limit,
            },
            onReceived,
          );
        },
      };
    }

    case "getFilteredWorksResp": {
      if (message.resp.status === "error") {
        return {
          newModel: {
            ...model,
            worksLoader: "error",
            error: "Failed to get works. Please try again later.",
          },
        };
      }
      return {
        newModel: {
          ...model,
          worksLoader: "idle",
          total: message.resp.value.total,
          works: message.resp.value.works,
        },
      };
    }
  }
};

export const useUpdate = createUpdate(update);
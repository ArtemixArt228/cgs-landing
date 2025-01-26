import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

// import CustomJsonView from "../../../components/CustomJsonView";
import CustomJsonView from "../../../components/CustomJsonView/customJsonView";

import * as Styled from "../../../components/CustomJsonView/jsonView.styled";
import { adminHistoryService } from "../../../services/history";

interface ISection {
  [key: string]: any;
}

interface IHistoryRecords {
  d: ISection;
  t: string;
}

interface IData {
  data: IHistoryRecords[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

type RecordType = {
  [key: string]: number | string | boolean | RecordType;
};

function compareObjects(obj1: RecordType, obj2: RecordType): RecordType {
  const result: RecordType = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      const value1 = obj1[key];
      const value2 = obj2[key];

      if (typeof value1 === "object" && typeof value2 === "object") {
        // Recursive call for nested objects
        const nestedDiff = compareObjects(value1, value2);
        if (Object.keys(nestedDiff).length > 0) {
          result[key] = nestedDiff;
        }
      } else if (value1 !== value2) {
        // Compare values and add to the result object if different
        key === "lastModified"
          ? (result[key] = value1)
          : (result[key] = ` >> ${value1}`);
      } else {
        result[key] = value1;
      }
    }
  }

  return result;
}

const HistoryPage = () => {
  const router = useRouter();
  const { page, section } = router.query;
  const { data }: IData = useQuery([page], () =>
    adminHistoryService.getHistory(`${page}/${section}`)
  );

  return (
    <Styled.Layout>
      <div style={{ display: "flex", alignItems: "baseline", gap: "30px" }}>
        <Styled.PageHeader>{page} page</Styled.PageHeader>
        <Styled.SectionHeader>{section} section history</Styled.SectionHeader>
      </div>

      {typeof data !== "undefined" &&
        data.map((record, idx, arr) => {
          return (
            section &&
            typeof section === "string" && (
              <Styled.HistoryItemContainer key={idx} idx={idx}>
                <Styled.CurrentHeader className="current-header">
                  Current state
                </Styled.CurrentHeader>
                {typeof window !== "undefined" &&
                  typeof arr[idx + 1] !== "undefined" && (
                    <CustomJsonView
                      data={compareObjects(
                        record.d[section],
                        arr[idx + 1].d[section]
                      )}
                    />
                  )}
              </Styled.HistoryItemContainer>
            )
          );
        })}
    </Styled.Layout>
  );
};

export default HistoryPage;

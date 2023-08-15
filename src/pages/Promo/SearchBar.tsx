/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import { memo, useCallback } from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const SearchBar = memo(() => {
  const navigate = useNavigate();

  const handleCreatePromo = useCallback(() => {
    navigate("create-promo");
  }, [navigate]);

  return (
    <div className="card flex justify-between p-6">
      <div className="flex items-center gap-3">
        <Input
          size="large"
          addonBefore={<SearchOutlined />}
          placeholder="Поиск объявления"
        />
      </div>

      <Button
        shape="round"
        size="large"
        type="primary"
        onClick={handleCreatePromo}
      >
        Создать объявление
      </Button>
    </div>
  );
});

export default SearchBar;

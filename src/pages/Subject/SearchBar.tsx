/**
 * Created by MIRZOEV A. on 09.08.2023
 */

import { memo, useCallback } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router";
import { SearchOutlined } from "@ant-design/icons";

interface SearchBarProps {}

const SearchBar = memo<SearchBarProps>(({}) => {
  const navigate = useNavigate();

  const handleCreateObject = useCallback(() => {
    navigate("create-subject");
  }, []);

  return (
    <div className="card flex justify-between p-6">
      <div className="flex items-center gap-3">
        <Button size="large">Фильтры</Button>
        <Input
          size="large"
          addonBefore={<SearchOutlined />}
          placeholder="Поиск объекта"
        />
      </div>

      <Button
        shape="round"
        size="large"
        type="primary"
        onClick={handleCreateObject}
      >
        Создать новый объект
      </Button>
    </div>
  );
});

export default SearchBar;

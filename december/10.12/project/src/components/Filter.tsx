import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

interface FilterProps {
  currentFilter: string;
  onChangeFilter: (newFilter: string) => void;
}

const Filter = ({ currentFilter, onChangeFilter }:FilterProps) => {
  return (
    <Box sx={{ margin: "16px auto", maxWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          value={currentFilter}
          onChange={(e) => onChangeFilter(e.target.value)}
        >
          <MenuItem value="">All Tasks</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;

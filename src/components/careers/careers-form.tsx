import careersSelects from "@/data/careers-selects.json";

const { jobTitles, locations, departments } = careersSelects;

const CareersForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="job-title">Job Title</label>
        <select name="job-title" id="job-title">
          {jobTitles.map((option) => (
            <option key={option} value="option">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <select name="location" id="location">
          {locations.map((option) => (
            <option key={option} value="option">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          {departments.map((option) => (
            <option key={option} value="option">
              {option}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default CareersForm;

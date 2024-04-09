import { useState } from "react";

const Overview = () => {
  const [expandedPackages, setExpandedPackages] = useState([]);
  const [expandedActivities, setExpandedActivities] = useState({});

  const toggleExpand = (packageId) => {
    setExpandedPackages((prev) =>
      prev.includes(packageId)
        ? prev.filter((id) => id !== packageId)
        : [...prev, packageId]
    );
  };

  const toggleActivityExpand = (packageId, activityId) => {
    setExpandedActivities((prev) => {
      const key = `${packageId}-${activityId}`;
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="mt-8 sm:px-6 lg:px-8">
      <div className="flex items-center md:justify-between ml-12 sm:ml-0 md:w-full font-semibold bg-blue-300">
        <div className="w-2/5">
          <input
            type="checkbox"
            className="ml-1 border-gray-400 hover:border-blue-500"
          />
          <label className="ml-2 text-gray-700">Packages</label>
        </div>
        <div className="w-1/5">Rate</div>
        <div className="w-1/5">Total</div>
        <div className="invisible w-1/5 text-black text-2xl cursor-pointer">
          ""
        </div>
      </div>

      {[1, 2, 3, 4, 5].map((packageId) => (
        <div key={packageId}>
          <div className="flex items-center md:justify-between ml-12 sm:ml-0 md:w-full">
            <div className="w-2/5">
              <input
                type="checkbox"
                id={`package-${packageId}`}
                onClick={handleCheckboxClick}
                className="ml-1 border-gray-400 hover:border-blue-500"
              />
              <label
                className="ml-2 text-gray-700"
                htmlFor={`package-${packageId}`}
              >
                Civil {packageId}
              </label>
            </div>
            <div className="w-1/5">567.80</div>
            <div className="w-1/5">₹ 2,98,6792</div>
            <div className="w-1/5 text-black text-2xl cursor-pointer">
              <span onClick={() => toggleExpand(packageId)}>
                {expandedPackages.includes(packageId) ? " − " : " + "}
              </span>
            </div>
          </div>

          {expandedPackages.includes(packageId) && (
            <>
              {[1, 2, 3, 4].map((activityId) => (
                <>
                  <div
                    key={`${packageId}-${activityId}`}
                    className="flex items-center md:justify-between border-t border-gray-300 ml-12 sm:ml-0 md:w-full"
                  >
                    <div className="w-2/5">
                      <input
                        type="checkbox"
                        id={`activity-${packageId}-${activityId}`}
                        onClick={handleCheckboxClick}
                        className="ml-5 border-gray-400 hover:border-blue-500"
                      />
                      <label
                        className="ml-2 text-gray-700"
                        htmlFor={`activity-${packageId}-${activityId}`}
                      >
                        Activity {activityId}
                      </label>
                    </div>
                    <div className="w-1/5">567.80</div>
                    <div className="w-1/5">₹ 2,98,6792</div>
                    <div className="w-1/5 text-black text-2xl cursor-pointer">
                      <span
                        onClick={() =>
                          toggleActivityExpand(packageId, activityId)
                        }
                      >
                        {expandedActivities[`${packageId}-${activityId}`]
                          ? "^"
                          : "v"}
                      </span>
                    </div>
                  </div>

                  {expandedActivities[`${packageId}-${activityId}`] && (
                    <>
                      {[1, 2, 3].map((workItemId) => (
                        <div
                          key={`${packageId}-${activityId}-${workItemId}`}
                          className="flex items-center md:justify-between border-t border-gray-300 ml-12 sm:ml-0 md:w-full"
                        >
                          <div className="w-2/5">
                            <input
                              type="checkbox"
                              id={`work-item-${packageId}-${activityId}-${workItemId}`}
                              onClick={handleCheckboxClick}
                              className="ml-10 border-gray-400 hover:border-blue-500"
                            />
                            <label
                              className="ml-2 text-gray-700"
                              htmlFor={`work-item-${packageId}-${activityId}-${workItemId}`}
                            >
                              Work Item {workItemId}
                            </label>
                          </div>
                          <div className="w-1/5"></div>
                          <div className="w-1/5">₹ 2,98,6792</div>
                          <div className="w-1/5"></div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Overview;

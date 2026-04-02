import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CollapsibleBlock({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="collapsible-block">
      <button
        className="collapsible-block__button"
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
      >
        <div className="collapsible-block__title">{title}</div>

        {isExpanded ? (
          <ChevronUp className="collapsible-block__icon" />
        ) : (
          <ChevronDown className="collapsible-block__icon" />
        )}
      </button>

      {isExpanded && (
        <div className="collapsible-block__content">
          {children}
        </div>
      )}
    </div>
  );
}
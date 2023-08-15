if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

// Refactoring
function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) return 0;
  // 장애 수단 계산

  function isNotEligibleForDisability() {
    // 장애 수당 적용 여부 확인
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    );
  }
}

// ----------------------------------------------------

if (anEmployee.onVacation) {
  if (anEmployee.seniority > 10) return 1;
  return 0.5;
}

// Refactoring
if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
return 0.5;

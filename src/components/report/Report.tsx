import React from 'react';
import { ReportProps } from '../../types/types';
import { unsetReport } from '../../redux/slices/reportSlice';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';

const Report: React.FC<ReportProps> = ({ report }) => {
  const dispatch = useDispatch();
  return (
    <section className={styles.reportContainer}>
      <h1 className={styles.heading}>Report</h1>
      <div className={styles.reportWrapper}>
        {report.username && (
          <div className={styles.reportLine}>
            <p className={styles.fieldName}>Username:</p>
            <p className={styles.fieldValue}>{report.username}</p>
          </div>
        )}
        {report.email && (
          <div className={styles.reportLine}>
            <p className={styles.fieldName}>Email:</p>
            <p className={styles.fieldValue}>{report.email}</p>
          </div>
        )}
        {report.password && (
          <div className={styles.reportLine}>
            <p className={styles.fieldName}>Password:</p>
            <p className={styles.fieldValue}>{report.password}</p>
          </div>
        )}
        {report.role && (
          <div className={styles.reportLine}>
            <p className={styles.fieldName}>Role:</p>
            <p className={styles.fieldValue}>{report.role}</p>
          </div>
        )}
      </div>
      {report.remember && (
        <button onClick={() => dispatch(unsetReport())} className={styles.clear}>
          Clear report
        </button>
      )}
    </section>
  );
};

export default Report;

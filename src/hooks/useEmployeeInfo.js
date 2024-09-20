import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, fetchEmployeesInfo } from "../store/reducers/employeeInfo";

export default function useEmployeeInfo() {
    const dispatch = useDispatch();
    const { employeeInfo, status, error } = useSelector((state) => state.employees);
    const token = localStorage.getItem('token');
    const [selectedIds, setSelectedIds] = useState([]);

    useEffect(() => {
        if (token) {
            dispatch(fetchEmployeesInfo(token));
        }
    }, [dispatch, token]);

    const handleDelete = (employeeId) => {
        if (window.confirm("Tem certeza de que deseja excluir este funcionário?")) {
            if (token) {
                dispatch(deleteEmployee({ employeeId, token }));
            }
        }
    };

    const handleBulkDelete = () => {
        if (window.confirm("Tem certeza que deseja excluir os funcionários selecionados?")) {
            if (token) {
                selectedIds.forEach(id => dispatch(deleteEmployee({ employeeId: id, token })));
            }
        }
    };

    const toggleSelect = (employeeId) => {
        setSelectedIds(prev =>
            prev.includes(employeeId) ? prev.filter(id => id !== employeeId) : [...prev, employeeId]
        );
    };

    return { employeeInfo, status, error, handleDelete, handleBulkDelete, toggleSelect, selectedIds };
}

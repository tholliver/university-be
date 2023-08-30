### Get all careers

<details>
 <summary><code>GET</code> <code><b>/careerlevels</b></code> </summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | JSON                                                         |

</details>



### Enroll a new student in a career.

 <summary><code>POST</code> <code><b>/career-enrollment</b></code> <code></code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON)   | JSON object schema for representing a student and career ID |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`         |           <code> [{ <br>"id": 10, <br> "enrollment_date": "2023-08-30T00:14:39.997Z", <br> "status": "Enrolled", <br> "studentId": 18, <br> "careerId": 2, <br> "createdAt": "2023-08-30T00:14:39.996Z", <br> "updatedAt": 2023-08-30T00:14:39.996Z" <br>}]<code>      |
> | `400`         | `application/json`                | `{"code":"400",          "message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

### Get all careers

<details>
 <summary><code>GET</code> <code><b>/careers</b></code> </summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | JSON                                                         |

</details>

### Get all students along with their associated careers

<details>
 <summary><code>GET</code> <code><b>/students</b></code> </summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | JSON                                                         |

</details>



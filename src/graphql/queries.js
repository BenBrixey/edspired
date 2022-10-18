/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      date
      name
      age
      medical
      telephone
      email
      photoConsent
      foodConsent
      createdAt
      updatedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        name
        age
        medical
        telephone
        email
        photoConsent
        foodConsent
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

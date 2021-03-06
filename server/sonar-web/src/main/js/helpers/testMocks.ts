/*
 * SonarQube
 * Copyright (C) 2009-2019 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { InjectedRouter } from 'react-router';
import { Location } from 'history';
import { Profile } from '../apps/quality-profiles/types';

export function mockAppState(overrides: Partial<T.AppState> = {}): T.AppState {
  return {
    defaultOrganization: 'foo',
    edition: 'community',
    productionDatabase: true,
    qualifiers: ['TRK'],
    settings: {},
    version: '1.0',
    ...overrides
  };
}

export function mockComponent(overrides: Partial<T.Component> = {}): T.Component {
  return {
    breadcrumbs: [],
    key: 'my-project',
    name: 'MyProject',
    organization: 'foo',
    qualifier: 'TRK',
    qualityGate: { isDefault: true, key: '30', name: 'Sonar way' },
    qualityProfiles: [
      {
        deleted: false,
        key: 'my-qp',
        language: 'ts',
        name: 'Sonar way'
      }
    ],
    tags: [],
    ...overrides
  };
}

export function mockCurrentUser(overrides: Partial<T.CurrentUser> = {}): T.CurrentUser {
  return {
    isLoggedIn: true,
    ...overrides
  };
}

export function mockEvent(overrides = {}) {
  return {
    target: { blur() {} },
    currentTarget: { blur() {} },
    preventDefault() {},
    stopPropagation() {},
    ...overrides
  } as any;
}

export function mockLocation(overrides: Partial<Location> = {}): Location {
  return {
    action: 'PUSH',
    key: 'key',
    pathname: '/path',
    query: {},
    search: '',
    state: {},
    ...overrides
  };
}

export function mockOrganization(overrides: Partial<T.Organization> = {}): T.Organization {
  return {
    key: 'foo',
    name: 'Foo',
    ...overrides
  };
}

export function mockQualityProfile(overrides: Partial<Profile> = {}): Profile {
  return {
    activeDeprecatedRuleCount: 2,
    activeRuleCount: 10,
    childrenCount: 0,
    depth: 1,
    isBuiltIn: false,
    isDefault: false,
    isInherited: false,
    key: 'key',
    language: 'js',
    languageName: 'JavaScript',
    name: 'name',
    projectCount: 3,
    organization: 'foo',
    ...overrides
  };
}

export function mockRouter(overrides: { push?: Function; replace?: Function } = {}) {
  return {
    createHref: jest.fn(),
    createPath: jest.fn(),
    go: jest.fn(),
    goBack: jest.fn(),
    goForward: jest.fn(),
    isActive: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    setRouteLeaveHook: jest.fn(),
    ...overrides
  } as InjectedRouter;
}

export function mockIssue(withLocations = false, overrides: Partial<T.Issue> = {}) {
  const issue: T.Issue = {
    actions: [],
    component: 'main.js',
    componentLongName: 'main.js',
    componentQualifier: 'FIL',
    componentUuid: 'foo1234',
    creationDate: '2017-03-01T09:36:01+0100',
    flows: [],
    fromHotspot: false,
    key: 'AVsae-CQS-9G3txfbFN2',
    line: 25,
    message: 'Reduce the number of conditional operators (4) used in the expression',
    organization: 'myorg',
    project: 'myproject',
    projectKey: 'foo',
    projectName: 'Foo',
    projectOrganization: 'org',
    rule: 'javascript:S1067',
    ruleName: 'foo',
    secondaryLocations: [],
    severity: 'MAJOR',
    status: 'OPEN',
    textRange: { startLine: 25, endLine: 26, startOffset: 0, endOffset: 15 },
    transitions: [],
    type: 'BUG'
  };

  function loc(): T.FlowLocation {
    return {
      component: 'main.js',
      textRange: { startLine: 1, startOffset: 1, endLine: 2, endOffset: 2 }
    };
  }

  if (withLocations) {
    issue.flows = [[loc(), loc(), loc()], [loc(), loc()]];
    issue.secondaryLocations = [loc(), loc()];
  }

  return {
    ...issue,
    ...overrides
  };
}

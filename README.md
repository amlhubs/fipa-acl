# @amlhubs/fipa-acl — IEEE FIPA Agent Communication Language as a Typed Metamodel

## Identity

| Field | Value |
|---|---|
| Standard | FIPA Agent Communication Language (Message Structure + Communicative Act Library + SL Content) |
| FIPA Specifications | [SC00061G — ACL Message Structure](http://www.fipa.org/specs/fipa00061/SC00061G.html) (2002-12-06), [SC00037J — Communicative Act Library](http://www.fipa.org/specs/fipa00037/SC00037J.html) (2002-12-03), [SC00008I — SL Content Language](http://www.fipa.org/specs/fipa00008/SC00008I.html) (2002-12-03) |
| Authority | [IEEE Computer Society Standards Activities Board](https://www.ieee.org/) — FIPA standards committee since 2005 |
| npm Package | `@amlhubs/fipa-acl` |
| npm Version | `0.0.1` |
| Peer Dependencies | [`@amlhubs/uml`](https://github.com/amlhubs/uml) `^0.0.2`, [`@amlhubs/sbvr`](https://github.com/amlhubs/sbvr) `^0.0.1`, [`@amlhubs/ocl`](https://github.com/amlhubs/ocl) `^0.0.1` |
| License | UNLICENSED |

## Abstract

The Foundation for Intelligent Physical Agents (FIPA) Agent Communication Language is the IEEE-stable typed-performative vocabulary for inter-agent communication. Where MCP and OpenAI / Anthropic tool-use schemas standardize the *transport protocol* between an agent and a tool, FIPA ACL standardizes the *speech-act vocabulary* between two agents. SC00061G fixes a 13-field message envelope with a mandatory `performative` field; SC00037J enumerates the 22 communicative acts (performatives) — each with a precondition, a rational effect, and a content schema; SC00008I specifies the SL (Semantic Language) content language used to populate the `content` field with typed propositions, action expressions, and identifying-reference expressions. The three specifications were published by FIPA on 2002-12-03/06 and inherited by the IEEE Computer Society Standards Activities Board in 2005, where they remain the authoritative typed-performative reference.

The `@amlhubs/fipa-acl` npm package surfaces the FIPA ACL specification set as CMOF-conformant TypeScript metaclasses. The 22 performatives are exposed as a single `Enumeration` (`PerformativeKind`) with 22 `EnumerationLiteral` instances, each carrying a JSDoc reference to the SC00037J §-section that defines its precondition (`FP` — Feasibility Precondition) and rational effect (`RE`). The 13-field message envelope is exposed as the `ACLMessage` `Class` with 13 `Property` declarations covering `performative`, `sender`, `receiver`, `reply-to`, `content`, `language`, `encoding`, `ontology`, `protocol`, `conversation-id`, `reply-with`, `in-reply-to`, and `reply-by`. The SL content algebra is exposed as the abstract `ContentExpression` `Class` with `Proposition`, `ActionExpression`, and `IdentifyingReferenceExpression` subclasses connected by `Generalization` relationships, plus the `SLProfile` `Enumeration` (SL0 / SL1 / SL2) — version `0.0.1` covers the SL0 profile in full and reserves SL1 / SL2 for subsequent rounds. Performative preconditions and rational effects are encoded as UML `Constraint` instances whose `specification` is an `OpaqueExpression` quoting the SC00037J body verbatim.

## Business Value — Why Extending This Metamodel Pays Off

FIPA ACL anchors agentic-software-development on a typed performative vocabulary instead of vendor-blog ad-hoc strings. Every multi-agent system that wants `request`, `inform`, `propose`, `accept-proposal`, `refuse`, `query-if`, `subscribe`, or `cfp` semantics today re-invents string-typed buses (`{"type": "askForCode", ...}`), which violates the No-String-Literal mandate the AML registry enforces. Rooting those messages in a typed `Enumeration` of 22 IEEE-published performatives — each with a published precondition, rational effect, and content schema — eliminates the per-team re-invention tax and makes inter-team agent interoperability a compile-time check rather than a documentation-driven coordination problem.

The typed `ACLMessage` envelope is the load-bearing artifact. The 13 fields of SC00061G map directly to the conversation-management primitives every multi-agent runtime needs — `conversation-id` for thread tracking, `reply-with` / `in-reply-to` for request-response correlation, `protocol` for stateful interaction-protocol selection, `ontology` for content-grounding resolution, `language` for content-language dispatch. A team that sends an `ACLMessage` instance through this typed surface sends a message that any other FIPA-aware runtime — JADE, SARL, Cougaar, Jadex — can consume without translation. Ventures that would otherwise spend quarters bespoke-coding inter-agent protocol layers amortize that engineering cost to zero.

The SL Content Language is the typed payload algebra under the envelope. SL specifies a closed grammar of propositions (atomic, conjunctive, disjunctive, negated, quantified, modal), action expressions (single actions, sequence, alternative, parallel, choice), and identifying-reference expressions (referential operators ι, ϵ, any). When an agent composes the `content` of an `inform` message as a typed `Proposition`, the TypeScript compiler evaluates whether the proposition is well-formed at the same moment it evaluates whether the surrounding code compiles — invalid combinations of modal and quantification, malformed referential operators, propositions with wrong arity for their connectives all fail at compile time rather than at agent-runtime parse time. The hallucination surface LLMs would otherwise introduce by inventing performatives or composing ill-formed content collapses to `tsc` errors traceable to specific §-sections of SC00037J and SC00008I.

The fourth lever is composability with the rest of the OMG / IEEE metamodel stack. FIPA ACL preconditions and rational effects are SBVR-compatible structural rules (each is "It is necessary that ..." or "It is permissible that ..." in structured English); SBVR Clause 23 specifies the MOF binding that lowers each rule to an OCL expression over the same UML metaclasses `@amlhubs/uml` exports. A `request` performative's precondition (`FP: Bi α ∧ ¬Bi (Bifref(j, α) ∨ Uifref(j, α))` per SC00037J §3.1.1) becomes a typed `IConstraint` with an `IOpaqueExpression` body, which downstream agentic-runtime validators evaluate at message-send time. The round trip from natural-language FIPA spec → typed `EnumerationLiteral` → SBVR rule → OCL expression is invertible: an auditor reading the runtime expression can reconstruct the original SC00037J citation without leaving the type system.

The fifth lever is positioning. FIPA ACL is the *typed-performative authority layer that complements (not replaces) MCP and tool-use schemas*. MCP is a transport protocol; tool-use schemas are payload schemas. FIPA ACL is the missing speech-act layer that says *what kind of message this is* (a request, an inform, a propose, a counter-propose) independently of how it is transported and how the payload is shaped. Adopting `@amlhubs/fipa-acl` into the agentic stack does not require abandoning MCP or any tool-use schema — it adds a typed performative envelope around them.

## Scope — What the Package Surfaces

The package surfaces the FIPA ACL specification set across the metamodel groupings below. The complete enumeration of metaclasses lives in [`fipa-acl.ts`](./fipa-acl.ts).

| FIPA Concept | Spec § | Metaclasses Surfaced |
|---|---|---|
| Communicative Acts (Performatives) | SC00037J §3.1–§3.22 | `IPerformativeKind` (Enumeration), 22 EnumerationLiterals (`accept-proposal`, `agree`, `cancel`, `cfp`, `confirm`, `disconfirm`, `failure`, `inform`, `inform-if`, `inform-ref`, `not-understood`, `propagate`, `propose`, `proxy`, `query-if`, `query-ref`, `refuse`, `reject-proposal`, `request`, `request-when`, `request-whenever`, `subscribe`) |
| Message Envelope | SC00061G §3 | `IACLMessage` (Class) with 13 Properties: `performative`, `sender`, `receiver`, `replyTo`, `content`, `language`, `encoding`, `ontology`, `protocol`, `conversationId`, `replyWith`, `inReplyTo`, `replyBy` |
| Agent Identifier | SC00061G §3.5 | `IAgentIdentifier` (Class) with `name`, `addresses`, `resolvers` Properties |
| Content Expression | SC00008I §2 | `IContentExpression` (abstract Class) + concrete `IProposition`, `IActionExpression`, `IIdentifyingReferenceExpression` connected via `IGeneralization` |
| Proposition algebra | SC00008I §2.5 | `IAtomicProposition`, `IConjunctiveProposition`, `IDisjunctiveProposition`, `INegativeProposition`, `IQuantifiedProposition`, `IModalProposition`, `IImplicativeProposition`, `IEquivalentProposition` |
| Action Expression algebra | SC00008I §2.4 | `IActionExpression` + `ISequenceActionExpression`, `IAlternativeActionExpression` |
| Identifying Reference algebra | SC00008I §2.6 | `IIdentifyingReferenceExpression` + `IReferentialOperatorIota`, `IReferentialOperatorEpsilon`, `IReferentialOperatorAny` |
| SL Profile | SC00008I §2.1 | `ISLProfile` (Enumeration) with `SL0`, `SL1`, `SL2` literals |
| Performative Constraints | SC00037J §3.1.1–§3.22 | One `IConstraint` per performative carrying its Feasibility Precondition (`FP`) and Rational Effect (`RE`) as `IOpaqueExpression` bodies |

Every interface carries a JSDoc header citing the FIPA SC document and §-section, and `implements I{Name}` is mandatory on every concrete class.

## Dependency Topology

```
@amlhubs/uml   (structural vocabulary — root of the OMG stack)
      ▲                                                                      ▲
      │ runtime dependency                                                   │ peerDependency
      │ (IElement, IClass, IProperty, IEnumeration, IEnumerationLiteral,     │
      │  IGeneralization, IConstraint, IOpaqueExpression)                    │
      │                                                                      │
      │                        @amlhubs/sbvr   (modal formulations as content)
      │                                              ▲
      │                                              │ runtime dependency
      │                                              │ (IModalFormulation, IObligationFormulation)
      │                                              │
      │                        @amlhubs/ocl    (alternate constraint body language)
      │                                              ▲
      │                                              │ runtime dependency
      │                                              │ (IExpressionInOCL)
      │                                              │
      └──────── @amlhubs/fipa-acl (this package) ────┘
```

`@amlhubs/fipa-acl` depends on [`@amlhubs/uml`](https://github.com/amlhubs/uml) for the CMOF metaclasses (`IClass`, `IProperty`, `IEnumeration`, `IEnumerationLiteral`, `IGeneralization`, `IConstraint`, `IOpaqueExpression`) it composes performatives, message envelopes, and content expressions from. It depends on [`@amlhubs/sbvr`](https://github.com/amlhubs/sbvr) so that performative preconditions and rational effects can be authored as `IModalFormulation` instances (matching the natural-language wording of SC00037J) before being lowered to `IConstraint` bodies. It depends on [`@amlhubs/ocl`](https://github.com/amlhubs/ocl) so that an alternate constraint body language is available for runtime evaluators that prefer OCL over the SBVR Structured English wording.

## Installation & Usage

```bash
npm install @amlhubs/fipa-acl @amlhubs/uml @amlhubs/sbvr @amlhubs/ocl
```

```typescript
import type {
  IACLMessage,
  IPerformativeKind,
  IAgentIdentifier,
  IContentExpression,
} from '@amlhubs/fipa-acl';

// Declare a FIPA ACL inform message as a typed metamodel instance.
const inform: IACLMessage = {
  elementId: 'ACLMessage_inform_001',
  performativeId: 'PerformativeKind_inform',  // SC00037J §3.8
  senderId: 'AgentIdentifier_alice',
  receiverIds: ['AgentIdentifier_bob'],
  replyToIds: [],
  contentId: 'Proposition_001',
  language: 'fipa-sl0',                       // SC00008I §2.1
  encoding: undefined,
  ontology: 'fipa-agent-management',
  protocol: 'fipa-request',                   // FIPA Interaction Protocol
  conversationId: 'conv_42',
  replyWith: 'msg_001',
  inReplyTo: undefined,
  replyBy: undefined,
};
```

The source artifact is [`fipa-acl.ts`](./fipa-acl.ts). Every interface JSDoc header declares `@standard FIPA SC{xxxxx}{letter}` and a `@section §x.y` reference.

## Provenance & Formal References

- [FIPA SC00061G — ACL Message Structure Specification (2002-12-06)](http://www.fipa.org/specs/fipa00061/SC00061G.html)
- [FIPA SC00037J — Communicative Act Library Specification (2002-12-03)](http://www.fipa.org/specs/fipa00037/SC00037J.html)
- [FIPA SC00008I — SL Content Language Specification (2002-12-03)](http://www.fipa.org/specs/fipa00008/SC00008I.html)
- [FIPA Standard Specifications Index](http://www.fipa.org/repository/standardspecs.html)
- [IEEE Computer Society — FIPA Standards Committee](https://www.ieee.org/) (FIPA inherited by IEEE-CS in 2005)

## Version History

| Version | Date | Change Summary |
|---|---|---|
| 0.0.1 | initial publish | 22 performatives (SC00037J), 13-field ACLMessage envelope (SC00061G), AgentIdentifier, ContentExpression hierarchy with Proposition / ActionExpression / IdentifyingReferenceExpression algebras (SC00008I §2), SL0 profile, performative preconditions and rational effects encoded as Constraint+OpaqueExpression. SL1 / SL2 reserved for subsequent rounds. |

## License

UNLICENSED — restricted npm access under `@amlhubs` scope at [npm.pkg.github.com](https://npm.pkg.github.com).

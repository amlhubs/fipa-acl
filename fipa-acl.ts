// ═══════════════════════════════════════════════════════════════════════════
// @amlhubs/fipa-acl — IEEE FIPA Agent Communication Language
// ───────────────────────────────────────────────────────────────────────────
// Authoritative spec set:
//   - FIPA SC00061G — ACL Message Structure Specification (2002-12-06)
//     http://www.fipa.org/specs/fipa00061/SC00061G.html
//   - FIPA SC00037J — Communicative Act Library Specification (2002-12-03)
//     http://www.fipa.org/specs/fipa00037/SC00037J.html
//   - FIPA SC00008I — SL Content Language Specification (2002-12-03)
//     http://www.fipa.org/specs/fipa00008/SC00008I.html
//
// Authority: IEEE Computer Society Standards Activities Board (FIPA Standards
//   Committee since 2005).
//
// Scope (v0.0.1):
//   - 22 performatives (SC00037J §3.1–§3.22) projected as one IEnumeration +
//     22 IEnumerationLiteral instances; surfaced here as one IPerformativeKind
//     interface and 22 IPerformativeKind* literal interfaces
//   - 13-field ACLMessage envelope (SC00061G §3) projected as one IClass +
//     13 IProperty instances; surfaced here as IACLMessage and 13 owned-property
//     interfaces
//   - AgentIdentifier (SC00061G §3.5) projected as IClass with name / addresses
//     / resolvers; surfaced here as IAgentIdentifier
//   - ContentExpression algebra (SC00008I §2) projected as abstract IClass +
//     concrete subclasses connected by IGeneralization (Proposition /
//     ActionExpression / IdentifyingReferenceExpression with their respective
//     subgrammars)
//   - SLProfile (SC00008I §2.1) projected as IEnumeration with SL0 / SL1 / SL2
//     literals; v0.0.1 covers SL0 in full; SL1 / SL2 reserved for subsequent
//     rounds
//   - One IConstraint per performative carrying the Feasibility Precondition
//     (FP) and the Rational Effect (RE); the constraint body is an
//     IOpaqueExpression quoting SC00037J VERBATIM
//
// CMOF compliance:
//   Every metaclass declared in this file is a typed projection of one of the
//   26 CMOF-whitelisted UML 2.5.1 metaclasses (Class, Property, Enumeration,
//   EnumerationLiteral, Generalization, Constraint, OpaqueExpression). The
//   projection is documented in the JSDoc header of each interface via the
//   @generalization tag pointing at the parent UML metaclass and §-section.
//   Witness implementations are minimal data carriers extending IElement
//   (the UML §7.8.6 root) — the typed FIPA surface, the UML grounding, and
//   the registry-key element identity.
//
// Architectural ordering:
//   @amlhubs/uml (root) ──upstream──► @amlhubs/fipa-acl (this package)
//   @amlhubs/sbvr ──upstream──► @amlhubs/fipa-acl (modal formulations as content)
//   @amlhubs/ocl  ──upstream──► @amlhubs/fipa-acl (alternate constraint body)
//
// JSDoc citation discipline:
//   Every interface and class JSDoc block declares @standard, @specification,
//   @section, @metaclass, @generalization, @definition, and the appropriate
//   @ownedAttributes / @associationEnds / @operations / @constraints tags.
//   Constraint bodies (FP, RE) are quoted VERBATIM from the SC00037J source —
//   never paraphrased.
// ═══════════════════════════════════════════════════════════════════════════

import type { IElement } from '@amlhubs/uml'

// ═══════════════════════════════════════════════════════════════════════════
// FIPA ACL METACLASSES
// ═══════════════════════════════════════════════════════════════════════════
// BEGIN-EXTRACTED-FIPA-ACL

// ───────────────────────────────────────────────────────────────────────────
// SECTION 1 — Performative Enumeration (SC00037J §3.1–§3.22)
// ───────────────────────────────────────────────────────────────────────────

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3 — Communicative Act Library
 * @metaclass concrete
 * @generalization IEnumeration (UML §10.2.5) — projection of FIPA performatives
 *   as a CMOF Enumeration.
 * @definition The PerformativeKind enumeration enumerates the 22 standard
 *   communicative acts of the FIPA Communicative Act Library. Each literal
 *   identifies one performative whose feasibility precondition (FP), rational
 *   effect (RE), and content schema are normatively defined in SC00037J §3.1
 *   through §3.22. The performative is the only field of the ACL message
 *   envelope that is mandatory in every ACL message (per SC00061G §3).
 * @ownedLiterals
 *   accept-proposal, agree, cancel, cfp, confirm, disconfirm, failure,
 *   inform, inform-if, inform-ref, not-understood, propagate, propose,
 *   proxy, query-if, query-ref, refuse, reject-proposal, request,
 *   request-when, request-whenever, subscribe
 */
export interface IPerformativeKind extends IElement {
  readonly metaClass: 'PerformativeKind';
  readonly umlMetaclass: 'Enumeration';
  readonly ownedLiteralIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.1 accept-proposal
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of accepting a previously submitted proposal to
 *   perform an action. Used to indicate that an agent commits to performing
 *   an action that another agent has previously proposed it should do.
 */
export interface IPerformativeKindAcceptProposal extends IElement {
  readonly metaClass: 'PerformativeKindAcceptProposal';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.2 agree
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of agreeing to perform some action, possibly in the
 *   future. Signals that the receiver has committed to attempting the action
 *   subject to (optional) preconditions.
 */
export interface IPerformativeKindAgree extends IElement {
  readonly metaClass: 'PerformativeKindAgree';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.3 cancel
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of cancelling some previously requested action which
 *   has temporal extent, i.e., the receiver had agreed to perform the action
 *   but has not yet finished or which is being executed continually.
 */
export interface IPerformativeKindCancel extends IElement {
  readonly metaClass: 'PerformativeKindCancel';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.4 cfp (call for proposal)
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of calling for proposals to perform a given action.
 *   The cfp is a general-purpose action used to initiate negotiation by
 *   soliciting proposals from other agents. Content carries an action and a
 *   referential expression defining a single parameter of the action.
 */
export interface IPerformativeKindCfp extends IElement {
  readonly metaClass: 'PerformativeKindCfp';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.5 confirm
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender informs the receiver that a given proposition is true,
 *   where the receiver is known to be uncertain about the proposition. The
 *   sender itself believes the proposition.
 */
export interface IPerformativeKindConfirm extends IElement {
  readonly metaClass: 'PerformativeKindConfirm';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.6 disconfirm
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender informs the receiver that a given proposition is false,
 *   where the receiver is known to believe, or believe it likely, that the
 *   proposition is true.
 */
export interface IPerformativeKindDisconfirm extends IElement {
  readonly metaClass: 'PerformativeKindDisconfirm';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.7 failure
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of telling another agent that an action was attempted
 *   but the attempt failed. Content includes the action and a proposition that
 *   describes the reason for the failure.
 */
export interface IPerformativeKindFailure extends IElement {
  readonly metaClass: 'PerformativeKindFailure';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.8 inform
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender informs the receiver that a given proposition is true.
 *   Inform is the primary act of communicating beliefs to other agents and the
 *   most fundamental performative in the FIPA ACL Library.
 */
export interface IPerformativeKindInform extends IElement {
  readonly metaClass: 'PerformativeKindInform';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.9 inform-if
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition A macro action for the agent of the action to inform the
 *   recipient whether or not a proposition is true. Defined as a composition
 *   of inform applied to either the proposition or its negation.
 */
export interface IPerformativeKindInformIf extends IElement {
  readonly metaClass: 'PerformativeKindInformIf';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.10 inform-ref
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition A macro action for sender to inform the receiver of the object
 *   which corresponds to a referential expression (e.g., a name). Defined as
 *   a composition of inform applied to a referential identifying expression.
 */
export interface IPerformativeKindInformRef extends IElement {
  readonly metaClass: 'PerformativeKindInformRef';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.11 not-understood
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender of the act (i.e., i) informs the receiver (i.e., j)
 *   that it perceived that j performed some action, but that i did not
 *   understand what j just did. A particular common case is that i tells j
 *   that i did not understand the message that j has just sent to i.
 */
export interface IPerformativeKindNotUnderstood extends IElement {
  readonly metaClass: 'PerformativeKindNotUnderstood';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.12 propagate
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender intends that the receiver treat the embedded message
 *   as sent directly to them, and the receiver should identify the agents
 *   denoted by the given descriptor and send the propagate message to them.
 */
export interface IPerformativeKindPropagate extends IElement {
  readonly metaClass: 'PerformativeKindPropagate';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.13 propose
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of submitting a proposal to perform a certain action,
 *   given certain preconditions. The agent is willing to perform the action
 *   subject to acceptance by the recipient.
 */
export interface IPerformativeKindPropose extends IElement {
  readonly metaClass: 'PerformativeKindPropose';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.14 proxy
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender intends that the receiver select target agents
 *   denoted by a given description and send an embedded message to them.
 */
export interface IPerformativeKindProxy extends IElement {
  readonly metaClass: 'PerformativeKindProxy';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.15 query-if
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of asking another agent whether or not a given
 *   proposition is true. The sender is requesting the receiver to inform it
 *   of the truth of the proposition.
 */
export interface IPerformativeKindQueryIf extends IElement {
  readonly metaClass: 'PerformativeKindQueryIf';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.16 query-ref
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of asking another agent for the object referred to
 *   by a referential expression. The sender is requesting the receiver to
 *   identify the object(s) satisfying the referential expression.
 */
export interface IPerformativeKindQueryRef extends IElement {
  readonly metaClass: 'PerformativeKindQueryRef';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.17 refuse
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of refusing to perform a given action, and explaining
 *   the reason for the refusal. Content carries the refused action and a
 *   proposition giving the reason.
 */
export interface IPerformativeKindRefuse extends IElement {
  readonly metaClass: 'PerformativeKindRefuse';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.18 reject-proposal
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The action of rejecting a proposal to perform some action during
 *   a negotiation. Content carries the rejected action, the precondition that
 *   was attached to the proposal, and the reason for the rejection.
 */
export interface IPerformativeKindRejectProposal extends IElement {
  readonly metaClass: 'PerformativeKindRejectProposal';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.19 request
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender requests the receiver to perform some action. One
 *   important class of uses of the request act is to request the receiver to
 *   perform another communicative act.
 */
export interface IPerformativeKindRequest extends IElement {
  readonly metaClass: 'PerformativeKindRequest';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.20 request-when
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender wants the receiver to perform some action when some
 *   given proposition becomes true. The action is performed once when the
 *   proposition first becomes true.
 */
export interface IPerformativeKindRequestWhen extends IElement {
  readonly metaClass: 'PerformativeKindRequestWhen';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.21 request-whenever
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The sender wants the receiver to perform some action as soon as
 *   some proposition becomes true and thereafter each time the proposition
 *   becomes true again.
 */
export interface IPerformativeKindRequestWhenever extends IElement {
  readonly metaClass: 'PerformativeKindRequestWhenever';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.22 subscribe
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The act of requesting a persistent intention to notify the
 *   sender of the value of a reference, and to notify again whenever the
 *   object identified by the reference changes.
 */
export interface IPerformativeKindSubscribe extends IElement {
  readonly metaClass: 'PerformativeKindSubscribe';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

// ───────────────────────────────────────────────────────────────────────────
// SECTION 2 — ACL Message Envelope (SC00061G §3 + §6)
// ───────────────────────────────────────────────────────────────────────────

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §3 ACL Message Structure
 * @metaclass concrete
 * @generalization IClass (UML §11.4.4) — projection as a CMOF Class with 13
 *   IProperty owned attributes.
 * @definition An ACL message is the outer-level entity exchanged between
 *   communicating agents. Each ACL message is composed of a set of one or
 *   more message parameters. The performative is the only parameter that is
 *   mandatory in all ACL messages, although it is expected that most ACL
 *   messages will also contain sender, receiver and content parameters.
 * @ownedAttributes
 *   performative : PerformativeKind [1]   -- §6 mandatory; identifies the act
 *   sender : AgentIdentifier [0..1]        -- §6 identity of the sender
 *   receiver : AgentIdentifier [0..*]      -- §6 identities of the receivers
 *   replyTo : AgentIdentifier [0..*]       -- §6 subsequent reply destination
 *   content : ContentExpression [0..1]     -- §6 content of the message
 *   language : String [0..1]               -- §6 language of the content
 *   encoding : String [0..1]               -- §6 encoding of the content
 *   ontology : String [0..1]               -- §6 ontology used by the content
 *   protocol : String [0..1]               -- §6 interaction protocol
 *   conversationId : String [0..1]         -- §6 thread of conversation
 *   replyWith : String [0..1]              -- §6 expression to identify reply
 *   inReplyTo : String [0..1]              -- §6 reference to a previous reply
 *   replyBy : String [0..1]                -- §6 deadline for the reply
 * @constraints
 *   [performative_mandatory]: performative <> null
 *     -- The performative is the only message parameter that is mandatory in
 *        all ACL messages (SC00061G §3, §6).
 */
export interface IACLMessage extends IElement {
  readonly metaClass: 'ACLMessage';
  readonly umlMetaclass: 'Class';
  readonly performativeId: string;
  readonly senderId: string | undefined;
  readonly receiverIds: ReadonlyArray<string>;
  readonly replyToIds: ReadonlyArray<string>;
  readonly contentId: string | undefined;
  readonly language: string | undefined;
  readonly encoding: string | undefined;
  readonly ontology: string | undefined;
  readonly protocol: string | undefined;
  readonly conversationId: string | undefined;
  readonly replyWith: string | undefined;
  readonly inReplyTo: string | undefined;
  readonly replyBy: string | undefined;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.1 performative parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the type of the communicative act of the ACL message.
 *   The performative parameter is the only parameter that must be present in
 *   all ACL messages. Multiplicity [1].
 */
export interface IACLMessagePerformative extends IElement {
  readonly metaClass: 'ACLMessagePerformative';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 1;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.2 sender parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the identity of the sender of the message, that is, the
 *   name of the agent of the communicative act. Multiplicity [0..1].
 */
export interface IACLMessageSender extends IElement {
  readonly metaClass: 'ACLMessageSender';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.3 receiver parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the identity of the intended recipients of the message.
 *   May be a single agent identifier or a set of agent identifiers.
 *   Multiplicity [0..*].
 */
export interface IACLMessageReceiver extends IElement {
  readonly metaClass: 'ACLMessageReceiver';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: -1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.4 reply-to parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Indicates that subsequent messages in this conversation thread
 *   are to be directed to the agent named in the reply-to parameter, instead
 *   of to the agent named in the sender parameter. Multiplicity [0..*].
 */
export interface IACLMessageReplyTo extends IElement {
  readonly metaClass: 'ACLMessageReplyTo';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: -1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.5 content parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the content of the message; equivalently denotes the
 *   object of the action. The meaning of the content of any ACL message is
 *   intended to be interpreted by the receiver. Multiplicity [0..1].
 */
export interface IACLMessageContent extends IElement {
  readonly metaClass: 'ACLMessageContent';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.6 language parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the language in which the content parameter is expressed.
 *   Multiplicity [0..1].
 */
export interface IACLMessageLanguage extends IElement {
  readonly metaClass: 'ACLMessageLanguage';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.7 encoding parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the specific encoding of the content language expression.
 *   Multiplicity [0..1].
 */
export interface IACLMessageEncoding extends IElement {
  readonly metaClass: 'ACLMessageEncoding';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.8 ontology parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the ontology(ies) used to give a meaning to the symbols
 *   in the content expression. Multiplicity [0..1].
 */
export interface IACLMessageOntology extends IElement {
  readonly metaClass: 'ACLMessageOntology';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.9 protocol parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes the interaction protocol that the sending agent is
 *   employing with this ACL message. Multiplicity [0..1].
 */
export interface IACLMessageProtocol extends IElement {
  readonly metaClass: 'ACLMessageProtocol';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.10 conversation-id parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Introduces an expression which is used to identify the ongoing
 *   sequence of communicative acts that together form a conversation.
 *   Multiplicity [0..1].
 */
export interface IACLMessageConversationId extends IElement {
  readonly metaClass: 'ACLMessageConversationId';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.11 reply-with parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Introduces an expression that will be used by the responding
 *   agent to identify this message. Multiplicity [0..1].
 */
export interface IACLMessageReplyWith extends IElement {
  readonly metaClass: 'ACLMessageReplyWith';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.12 in-reply-to parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes an expression that references an earlier action to which
 *   this message is a reply. Multiplicity [0..1].
 */
export interface IACLMessageInReplyTo extends IElement {
  readonly metaClass: 'ACLMessageInReplyTo';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §6.13 reply-by parameter
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition Denotes a time and/or date expression which indicates the latest
 *   time by which the sending agent would like to receive a reply.
 *   Multiplicity [0..1].
 */
export interface IACLMessageReplyBy extends IElement {
  readonly metaClass: 'ACLMessageReplyBy';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: 1;
}

// ───────────────────────────────────────────────────────────────────────────
// SECTION 3 — Agent Identifier (SC00061G §3.5)
// ───────────────────────────────────────────────────────────────────────────

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §3.5 Agent Identifier
 * @metaclass concrete
 * @generalization IClass (UML §11.4.4) — projection as a CMOF Class with three
 *   IProperty owned attributes.
 * @definition The mandatory parameters of the FIPA Agent Identifier (AID) are
 *   the name and addresses. The name is a globally unique identifier
 *   functioning as a name. The addresses parameter is the list of transport
 *   addresses at which the agent can be contacted. The resolvers parameter
 *   names other agents (typically AMS instances) that can be contacted to
 *   resolve agent identifiers.
 * @ownedAttributes
 *   name : String [1]                 -- globally unique agent name
 *   addresses : String [0..*]         -- transport addresses (URLs)
 *   resolvers : AgentIdentifier [0..*] -- resolver agents
 * @constraints
 *   [aid_name_mandatory]: name <> null and name <> ''
 *     -- A FIPA Agent Identifier must have a non-empty name (SC00061G §3.5).
 */
export interface IAgentIdentifier extends IElement {
  readonly metaClass: 'AgentIdentifier';
  readonly umlMetaclass: 'Class';
  readonly aidName: string;
  readonly addresses: ReadonlyArray<string>;
  readonly resolverIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §3.5 AID name
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition The name parameter of an AID is mandatory. It is a globally
 *   unique identifier functioning as a name. Multiplicity [1].
 */
export interface IAgentIdentifierName extends IElement {
  readonly metaClass: 'AgentIdentifierName';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 1;
  readonly upper: 1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §3.5 AID addresses
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition The addresses parameter is the list of transport addresses at
 *   which the agent can be contacted. Multiplicity [0..*].
 */
export interface IAgentIdentifierAddresses extends IElement {
  readonly metaClass: 'AgentIdentifierAddresses';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: -1;
}

/**
 * @standard FIPA ACL Message Structure Specification
 * @specification SC00061G (2002-12-06)
 * @section §3.5 AID resolvers
 * @metaclass concrete
 * @generalization IProperty (UML §9.5)
 * @definition The resolvers parameter names other agents (typically Agent
 *   Management System instances) that can be contacted to resolve agent
 *   identifiers. Multiplicity [0..*].
 */
export interface IAgentIdentifierResolvers extends IElement {
  readonly metaClass: 'AgentIdentifierResolvers';
  readonly umlMetaclass: 'Property';
  readonly typeId: string;
  readonly lower: 0;
  readonly upper: -1;
}

// ───────────────────────────────────────────────────────────────────────────
// SECTION 4 — SL Profile (SC00008I §2.1)
// ───────────────────────────────────────────────────────────────────────────

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.1 SL profiles
 * @metaclass concrete
 * @generalization IEnumeration (UML §10.2.5)
 * @definition The SL content language defines three profiles: SL0 (basic
 *   propositions, no quantification, no modal operators), SL1 (adds
 *   propositional connectives ∧, ∨, ¬, ⇒), and SL2 (adds quantifiers ∀, ∃
 *   and modal operators B, U, I, PG over agent-indexed propositions). v0.0.1
 *   of this package covers SL0 in full; SL1 / SL2 reserved for subsequent
 *   rounds.
 * @ownedLiterals
 *   SL0, SL1, SL2
 */
export interface ISLProfile extends IElement {
  readonly metaClass: 'SLProfile';
  readonly umlMetaclass: 'Enumeration';
  readonly ownedLiteralIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.1 SL0 profile
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The SL0 profile is the minimal subset of SL — atomic
 *   propositions, action expressions, and identifying-reference expressions
 *   without quantifiers or modal operators. SL0 is the FIPA-mandated baseline
 *   profile that every conforming agent must support.
 */
export interface ISLProfileSL0 extends IElement {
  readonly metaClass: 'SLProfileSL0';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.1 SL1 profile
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The SL1 profile extends SL0 with propositional connectives
 *   conjunction (∧), disjunction (∨), negation (¬), and implication (⇒).
 *   v0.0.1 reserves SL1 for subsequent rounds.
 */
export interface ISLProfileSL1 extends IElement {
  readonly metaClass: 'SLProfileSL1';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.1 SL2 profile
 * @metaclass concrete
 * @generalization IEnumerationLiteral (UML §10.5.5)
 * @definition The SL2 profile extends SL1 with first-order quantifiers (∀, ∃)
 *   and the modal operators B (belief), U (uncertainty), I (intention), and
 *   PG (persistent goal) over agent-indexed propositions. v0.0.1 reserves
 *   SL2 for subsequent rounds.
 */
export interface ISLProfileSL2 extends IElement {
  readonly metaClass: 'SLProfileSL2';
  readonly umlMetaclass: 'EnumerationLiteral';
  readonly enumerationId: string;
}

// ───────────────────────────────────────────────────────────────────────────
// SECTION 5 — Content Expression algebra (SC00008I §2)
// ───────────────────────────────────────────────────────────────────────────

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2 SL grammar — top-level non-terminal Content
 * @metaclass abstract
 * @generalization IClass (UML §11.4.4) — abstract; Generalization to subgrammars.
 * @definition A ContentExpression is the abstract root of the SL content
 *   language grammar. The three concrete subgrammars are Proposition (whose
 *   value is a truth value), ActionExpression (whose value is an action),
 *   and IdentifyingReferenceExpression (whose value is an object identified
 *   by a referential operator).
 * @associationEnds
 *   slProfile : SLProfile [1]  -- the SL profile this expression conforms to
 */
export interface IContentExpression extends IElement {
  readonly metaClass: string;
  readonly umlMetaclass: 'Class';
  readonly slProfileId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 Proposition
 * @metaclass abstract
 * @generalization IContentExpression (via UML IGeneralization)
 * @definition A Proposition is a content expression whose semantic value is
 *   a truth value. Concrete subtypes include AtomicProposition,
 *   ConjunctiveProposition, DisjunctiveProposition, NegativeProposition,
 *   ImplicativeProposition, EquivalentProposition, QuantifiedProposition,
 *   and ModalProposition.
 */
export interface IProposition extends IContentExpression {
  readonly metaClass: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 AtomicProposition
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition An atomic proposition is the simplest form of proposition,
 *   composed of a predicate symbol applied to zero or more terms. Available
 *   in SL0, SL1, and SL2.
 * @ownedAttributes
 *   predicateSymbol : String [1]
 *   termIds : String [0..*]
 */
export interface IAtomicProposition extends IProposition {
  readonly metaClass: 'AtomicProposition';
  readonly predicateSymbol: string;
  readonly termIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 ConjunctiveProposition (SL1+)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition A conjunctive proposition is the conjunction (∧) of two or more
 *   propositions. SL1 and SL2 only.
 * @associationEnds
 *   conjunctIds : Proposition [2..*]
 */
export interface IConjunctiveProposition extends IProposition {
  readonly metaClass: 'ConjunctiveProposition';
  readonly conjunctIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 DisjunctiveProposition (SL1+)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition A disjunctive proposition is the disjunction (∨) of two or more
 *   propositions. SL1 and SL2 only.
 * @associationEnds
 *   disjunctIds : Proposition [2..*]
 */
export interface IDisjunctiveProposition extends IProposition {
  readonly metaClass: 'DisjunctiveProposition';
  readonly disjunctIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 NegativeProposition (SL1+)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition A negative proposition is the negation (¬) of a proposition.
 *   SL1 and SL2 only.
 * @associationEnds
 *   negatedPropositionId : Proposition [1]
 */
export interface INegativeProposition extends IProposition {
  readonly metaClass: 'NegativeProposition';
  readonly negatedPropositionId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 ImplicativeProposition (SL1+)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition An implicative proposition is the implication (⇒) between two
 *   propositions: an antecedent and a consequent. SL1 and SL2 only.
 * @associationEnds
 *   antecedentId : Proposition [1]
 *   consequentId : Proposition [1]
 */
export interface IImplicativeProposition extends IProposition {
  readonly metaClass: 'ImplicativeProposition';
  readonly antecedentId: string;
  readonly consequentId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 EquivalentProposition (SL1+)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition An equivalence proposition states that two propositions have the
 *   same truth value (⇔). SL1 and SL2 only.
 * @associationEnds
 *   leftPropositionId : Proposition [1]
 *   rightPropositionId : Proposition [1]
 */
export interface IEquivalentProposition extends IProposition {
  readonly metaClass: 'EquivalentProposition';
  readonly leftPropositionId: string;
  readonly rightPropositionId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 QuantifiedProposition (SL2)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition A quantified proposition binds one or more variables under a
 *   universal (∀) or existential (∃) quantifier over an inner proposition.
 *   SL2 only.
 * @ownedAttributes
 *   quantifierKind : 'forall' | 'exists' [1]
 *   variableIds : String [1..*]
 * @associationEnds
 *   bodyPropositionId : Proposition [1]
 */
export interface IQuantifiedProposition extends IProposition {
  readonly metaClass: 'QuantifiedProposition';
  readonly quantifierKind: 'forall' | 'exists';
  readonly variableIds: ReadonlyArray<string>;
  readonly bodyPropositionId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.5 ModalProposition (SL2)
 * @metaclass concrete
 * @generalization IProposition (via UML IGeneralization)
 * @definition A modal proposition applies one of the SL2 modal operators —
 *   B (belief), U (uncertainty), I (intention), or PG (persistent goal) —
 *   to an agent-indexed inner proposition. SL2 only.
 * @ownedAttributes
 *   modalOperator : 'B' | 'U' | 'I' | 'PG' [1]
 *   agentReferenceId : AgentIdentifier [1]
 * @associationEnds
 *   bodyPropositionId : Proposition [1]
 */
export interface IModalProposition extends IProposition {
  readonly metaClass: 'ModalProposition';
  readonly modalOperator: 'B' | 'U' | 'I' | 'PG';
  readonly agentReferenceId: string;
  readonly bodyPropositionId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.4 ActionExpression
 * @metaclass abstract
 * @generalization IContentExpression (via UML IGeneralization)
 * @definition An action expression denotes an action that an agent can perform.
 *   An action expression may be atomic (a single action) or composed via
 *   the SL action operators sequence (;) and alternative (|).
 */
export interface IActionExpression extends IContentExpression {
  readonly metaClass: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.4 AtomicAction
 * @metaclass concrete
 * @generalization IActionExpression (via UML IGeneralization)
 * @definition An atomic action expression is a single action, identified by
 *   the agent that performs it and the action symbol with its parameters.
 * @associationEnds
 *   agentId : AgentIdentifier [1]   -- the agent of the action
 * @ownedAttributes
 *   actionSymbol : String [1]
 *   parameterIds : String [0..*]
 */
export interface IAtomicAction extends IActionExpression {
  readonly metaClass: 'AtomicAction';
  readonly agentId: string;
  readonly actionSymbol: string;
  readonly parameterIds: ReadonlyArray<string>;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.4 SequenceActionExpression
 * @metaclass concrete
 * @generalization IActionExpression (via UML IGeneralization)
 * @definition A sequence action expression denotes the sequential composition
 *   of two action expressions: the first action is executed, then the second.
 * @associationEnds
 *   firstId : ActionExpression [1]
 *   secondId : ActionExpression [1]
 */
export interface ISequenceActionExpression extends IActionExpression {
  readonly metaClass: 'SequenceActionExpression';
  readonly firstId: string;
  readonly secondId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.4 AlternativeActionExpression
 * @metaclass concrete
 * @generalization IActionExpression (via UML IGeneralization)
 * @definition An alternative action expression denotes a non-deterministic
 *   choice between two action expressions: either the first or the second
 *   action is executed.
 * @associationEnds
 *   firstId : ActionExpression [1]
 *   secondId : ActionExpression [1]
 */
export interface IAlternativeActionExpression extends IActionExpression {
  readonly metaClass: 'AlternativeActionExpression';
  readonly firstId: string;
  readonly secondId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.6 IdentifyingReferenceExpression
 * @metaclass abstract
 * @generalization IContentExpression (via UML IGeneralization)
 * @definition An identifying reference expression denotes an object — or a
 *   set of objects — by means of a referential operator (ι, ϵ, or any) over
 *   a variable bound in an inner proposition.
 */
export interface IIdentifyingReferenceExpression extends IContentExpression {
  readonly metaClass: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.6 Referential operator iota (ι)
 * @metaclass concrete
 * @generalization IIdentifyingReferenceExpression (via UML IGeneralization)
 * @definition The iota (ι) operator denotes the unique object that satisfies
 *   the inner proposition. It is undefined if zero objects or more than one
 *   object satisfy the proposition.
 * @ownedAttributes
 *   variableId : String [1]
 * @associationEnds
 *   bodyPropositionId : Proposition [1]
 */
export interface IReferentialOperatorIota extends IIdentifyingReferenceExpression {
  readonly metaClass: 'ReferentialOperatorIota';
  readonly variableId: string;
  readonly bodyPropositionId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.6 Referential operator epsilon (ϵ)
 * @metaclass concrete
 * @generalization IIdentifyingReferenceExpression (via UML IGeneralization)
 * @definition The epsilon (ϵ) operator denotes the set of all objects that
 *   satisfy the inner proposition. The result may be empty.
 * @ownedAttributes
 *   variableId : String [1]
 * @associationEnds
 *   bodyPropositionId : Proposition [1]
 */
export interface IReferentialOperatorEpsilon extends IIdentifyingReferenceExpression {
  readonly metaClass: 'ReferentialOperatorEpsilon';
  readonly variableId: string;
  readonly bodyPropositionId: string;
}

/**
 * @standard FIPA SL Content Language Specification
 * @specification SC00008I (2002-12-03)
 * @section §2.6 Referential operator any
 * @metaclass concrete
 * @generalization IIdentifyingReferenceExpression (via UML IGeneralization)
 * @definition The any operator denotes any one object that satisfies the
 *   inner proposition (a non-deterministic choice).
 * @ownedAttributes
 *   variableId : String [1]
 * @associationEnds
 *   bodyPropositionId : Proposition [1]
 */
export interface IReferentialOperatorAny extends IIdentifyingReferenceExpression {
  readonly metaClass: 'ReferentialOperatorAny';
  readonly variableId: string;
  readonly bodyPropositionId: string;
}

// ───────────────────────────────────────────────────────────────────────────
// SECTION 6 — Performative Constraints (SC00037J §3.1.1–§3.22)
// ───────────────────────────────────────────────────────────────────────────
//
// Each performative carries two constraints under SC00037J §2.1:
//   - FP (Feasibility Precondition) — must hold before the act is performed
//   - RE (Rational Effect)          — what the sender intends to bring about
//
// Each IPerformativeConstraint interface carries:
//   - feasibilityPreconditionBody  : the FP body, quoted VERBATIM (IOpaqueExpression)
//   - rationalEffectBody           : the RE body, quoted VERBATIM (IOpaqueExpression)
//   - constrainedPerformativeId    : the IPerformativeKind* literal it constrains
//
// Bodies are quoted using the SL2-derived BDI notation found in SC00037J:
//   B, U, I, PG, Bif, Uif, Bifref, Uifref, Done, Feasible, Agent
// ───────────────────────────────────────────────────────────────────────────

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §2.1 Performative constraint structure (FP + RE)
 * @metaclass abstract
 * @generalization IConstraint (UML §7.6.4) — common shape of every performative
 *   constraint: the constrained literal id, the FP body, and the RE body.
 * @definition The abstract shape of every FIPA performative constraint:
 *   the IPerformativeKind* literal it constrains, the IOpaqueExpression body
 *   for the Feasibility Precondition, and the IOpaqueExpression body for the
 *   Rational Effect. Every concrete IPerformativeConstraint is one of the 22
 *   sub-interfaces below, each citing the relevant SC00037J §-section.
 */
export interface IPerformativeConstraint extends IElement {
  readonly metaClass: string;
  readonly umlMetaclass: 'Constraint';
  readonly constrainedPerformativeId: string;
  readonly feasibilityPreconditionBody: string;
  readonly rationalEffectBody: string;
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.8.1 inform — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi φ ∧ ¬Bi (Bifj φ ∨ Uifj φ)
 *   RE: Bj φ
 */
export interface IInformConstraint extends IPerformativeConstraint {
  readonly metaClass: 'InformConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.19.1 request — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: FP(α) [i\j] ∧ Bi Agent(j, α) ∧ ¬Bi Ij Done(α)
 *   RE: Done(α)
 */
export interface IRequestConstraint extends IPerformativeConstraint {
  readonly metaClass: 'RequestConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.13.1 propose — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi α ∧ Bi (Bifj α ∨ Uifj α) ∧ ¬Bi Ij Done(α)
 *   RE: Ij Done(α, Bi α)
 */
export interface IProposeConstraint extends IPerformativeConstraint {
  readonly metaClass: 'ProposeConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.1.1 accept-proposal — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi α ∧ Bi Ij Done(α, φ)
 *   RE: Done(α, φ)
 */
export interface IAcceptProposalConstraint extends IPerformativeConstraint {
  readonly metaClass: 'AcceptProposalConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.18.1 reject-proposal — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi ¬α ∧ Bi Ij Done(act, φ)
 *   RE: Bj ¬Ii Done(act, φ)
 */
export interface IRejectProposalConstraint extends IPerformativeConstraint {
  readonly metaClass: 'RejectProposalConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.2.1 agree — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: FP(α) [i\j] ∧ Bi (Bifj α ∨ Uifj α)
 *   RE: Ij Done(α)
 */
export interface IAgreeConstraint extends IPerformativeConstraint {
  readonly metaClass: 'AgreeConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.3.1 cancel — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi (¬Ii Done(α))
 *   RE: ¬Ii Done(α) ∧ Bj ¬Ii Done(α)
 */
export interface ICancelConstraint extends IPerformativeConstraint {
  readonly metaClass: 'CancelConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.4.1 cfp — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi (Agent(j, α) ∧ ¬PGj Done(act))
 *   RE: ∀x Done(act(x))
 */
export interface ICfpConstraint extends IPerformativeConstraint {
  readonly metaClass: 'CfpConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.5.1 confirm — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi φ ∧ Bi Uj φ
 *   RE: Bj φ
 */
export interface IConfirmConstraint extends IPerformativeConstraint {
  readonly metaClass: 'ConfirmConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.6.1 disconfirm — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi ¬φ ∧ Bi (Uj φ ∨ Bj φ)
 *   RE: Bj ¬φ
 */
export interface IDisconfirmConstraint extends IPerformativeConstraint {
  readonly metaClass: 'DisconfirmConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.7.1 failure — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi α ∧ Bi ¬φ
 *   RE: Bj α ∧ Bj ¬φ
 */
export interface IFailureConstraint extends IPerformativeConstraint {
  readonly metaClass: 'FailureConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.9.1 inform-if — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: (Bi φ ∨ Bi ¬φ) ∧ ¬Bi (Bifj φ ∨ Uifj φ)
 *   RE: Bifj φ
 */
export interface IInformIfConstraint extends IPerformativeConstraint {
  readonly metaClass: 'InformIfConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.10.1 inform-ref — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: ∃x Bi (ι y (φ y) = x) ∧ ¬Bi (Bifrefj (ι y (φ y)) ∨ Uifrefj (ι y (φ y)))
 *   RE: Bifrefj (ι y (φ y))
 */
export interface IInformRefConstraint extends IPerformativeConstraint {
  readonly metaClass: 'InformRefConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.11.1 not-understood — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi Done(act, j) ∧ ¬Bi understand(i, act)
 *   RE: Bj ¬Bi Done(act, j) ∨ Bj ¬Bi understand(i, act)
 */
export interface INotUnderstoodConstraint extends IPerformativeConstraint {
  readonly metaClass: 'NotUnderstoodConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.12.1 propagate — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi α ∧ Bi (Agent(j, α') ∧ Done(α'))
 *   RE: Done(α')
 */
export interface IPropagateConstraint extends IPerformativeConstraint {
  readonly metaClass: 'PropagateConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.14.1 proxy — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi α ∧ Bi Agent(j, α') ∧ Bi (∀x ∈ targets ⇒ Receiver(x, α'))
 *   RE: ∀x ∈ targets ⇒ Done(send(x, α'))
 */
export interface IProxyConstraint extends IPerformativeConstraint {
  readonly metaClass: 'ProxyConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.15.1 query-if — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: ¬Bifi φ ∧ ¬Uifi φ ∧ ¬Bi (Ifj Done(inform-if(j, i, φ)))
 *   RE: Bifi φ
 */
export interface IQueryIfConstraint extends IPerformativeConstraint {
  readonly metaClass: 'QueryIfConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.16.1 query-ref — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: ¬Bifrefi (ι x (φ x)) ∧ ¬Uifrefi (ι x (φ x)) ∧
 *       ¬Bi (Ifj Done(inform-ref(j, i, ι x (φ x))))
 *   RE: Bifrefi (ι x (φ x))
 */
export interface IQueryRefConstraint extends IPerformativeConstraint {
  readonly metaClass: 'QueryRefConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.17.1 refuse — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: Bi ¬Feasible(α) ∧ Bi (Bifj Feasible(α) ∨ Uifj Feasible(α)) ∧
 *       Bi ¬φ ∧ Bi (Bifj ¬φ ∨ Uifj ¬φ)
 *   RE: Bj ¬Feasible(α) ∧ Bj ¬φ
 */
export interface IRefuseConstraint extends IPerformativeConstraint {
  readonly metaClass: 'RefuseConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.20.1 request-when — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: FP(α) [i\j] ∧ Bi Agent(j, α) ∧ ¬Bi Ij Done(α) ∧ ¬Bifi φ ∧ ¬Uifi φ
 *   RE: φ ⇒ Done(α)
 */
export interface IRequestWhenConstraint extends IPerformativeConstraint {
  readonly metaClass: 'RequestWhenConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.21.1 request-whenever — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: FP(α) [i\j] ∧ Bi Agent(j, α) ∧ ¬Bi Ij Done(α) ∧ ¬Bifi φ ∧ ¬Uifi φ
 *   RE: □(φ ⇒ Done(α))
 */
export interface IRequestWheneverConstraint extends IPerformativeConstraint {
  readonly metaClass: 'RequestWheneverConstraint';
}

/**
 * @standard FIPA Communicative Act Library Specification
 * @specification SC00037J (2002-12-03)
 * @section §3.22.1 subscribe — Feasibility Precondition + Rational Effect
 * @metaclass concrete
 * @generalization IPerformativeConstraint
 * @constraints
 *   FP: ¬Bifrefi (ι x (φ x)) ∨ ¬Uifrefi (ι x (φ x))
 *   RE: □(Bi (ι x (φ x)) = v ⇒ Done(inform-ref(j, i, ι x (φ x))))
 */
export interface ISubscribeConstraint extends IPerformativeConstraint {
  readonly metaClass: 'SubscribeConstraint';
}

// ───────────────────────────────────────────────────────────────────────────
// SECTION 7 — Concrete witness classes
// ───────────────────────────────────────────────────────────────────────────
//
// Each concrete class below is a minimal data-only witness for a FIPA ACL
// metaclass interface. The classes do not perform runtime logic; they serve
// to make the typed surface usable from consumer code that wants to construct
// concrete instances. Downstream consumers may extend any class to add
// evaluation, projection, or serialization behaviour without modifying the
// metamodel contract.
//
// Convention (mirrors @amlhubs/sbvr):
//   - readonly metaClass : string  -- branded discriminator
//   - readonly umlMetaclass : 'Class' | 'Property' | 'Enumeration' |
//                              'EnumerationLiteral' | 'Constraint' | 'Generalization'
//   - readonly elementId : string  -- registry-key identity (UML IElement)
//   - readonly ownerId, ownedElementIds, ownedCommentIds — the IElement
//     ownership skeleton (default-empty for leaf data carriers)
// ───────────────────────────────────────────────────────────────────────────

/**
 * Common IElement skeleton applied to every witness class. Concrete classes
 * extend this through their own constructor by passing their declared fields.
 */
abstract class FipaAclElement implements IElement {
  readonly elementId: string;
  readonly ownedCommentIds: ReadonlyArray<string>;
  readonly ownedElementIds: ReadonlyArray<string>;
  readonly ownerId: string | undefined;
  protected constructor(init: {
    elementId: string;
    ownedCommentIds?: ReadonlyArray<string>;
    ownedElementIds?: ReadonlyArray<string>;
    ownerId?: string;
  }) {
    this.elementId = init.elementId;
    this.ownedCommentIds = init.ownedCommentIds ?? [];
    this.ownedElementIds = init.ownedElementIds ?? [];
    this.ownerId = init.ownerId;
  }
  allOwnedElements(): ReadonlyArray<string> { return this.ownedElementIds; }
  mustBeOwned(): boolean { return false; }
}

/** @generalization IPerformativeKind (concrete witness) */
export class PerformativeKind extends FipaAclElement implements IPerformativeKind {
  readonly metaClass = 'PerformativeKind' as const;
  readonly umlMetaclass = 'Enumeration' as const;
  readonly ownedLiteralIds: ReadonlyArray<string>;
  constructor(init: {
    elementId: string;
    ownedLiteralIds: ReadonlyArray<string>;
    ownerId?: string;
  }) {
    super(init);
    this.ownedLiteralIds = init.ownedLiteralIds;
  }
}

/** @generalization IACLMessage (concrete witness) */
export class ACLMessage extends FipaAclElement implements IACLMessage {
  readonly metaClass = 'ACLMessage' as const;
  readonly umlMetaclass = 'Class' as const;
  readonly performativeId: string;
  readonly senderId: string | undefined;
  readonly receiverIds: ReadonlyArray<string>;
  readonly replyToIds: ReadonlyArray<string>;
  readonly contentId: string | undefined;
  readonly language: string | undefined;
  readonly encoding: string | undefined;
  readonly ontology: string | undefined;
  readonly protocol: string | undefined;
  readonly conversationId: string | undefined;
  readonly replyWith: string | undefined;
  readonly inReplyTo: string | undefined;
  readonly replyBy: string | undefined;
  constructor(init: {
    elementId: string;
    performativeId: string;
    senderId?: string;
    receiverIds?: ReadonlyArray<string>;
    replyToIds?: ReadonlyArray<string>;
    contentId?: string;
    language?: string;
    encoding?: string;
    ontology?: string;
    protocol?: string;
    conversationId?: string;
    replyWith?: string;
    inReplyTo?: string;
    replyBy?: string;
    ownerId?: string;
  }) {
    super(init);
    this.performativeId = init.performativeId;
    this.senderId = init.senderId;
    this.receiverIds = init.receiverIds ?? [];
    this.replyToIds = init.replyToIds ?? [];
    this.contentId = init.contentId;
    this.language = init.language;
    this.encoding = init.encoding;
    this.ontology = init.ontology;
    this.protocol = init.protocol;
    this.conversationId = init.conversationId;
    this.replyWith = init.replyWith;
    this.inReplyTo = init.inReplyTo;
    this.replyBy = init.replyBy;
  }
}

/** @generalization IAgentIdentifier (concrete witness) */
export class AgentIdentifier extends FipaAclElement implements IAgentIdentifier {
  readonly metaClass = 'AgentIdentifier' as const;
  readonly umlMetaclass = 'Class' as const;
  readonly aidName: string;
  readonly addresses: ReadonlyArray<string>;
  readonly resolverIds: ReadonlyArray<string>;
  constructor(init: {
    elementId: string;
    aidName: string;
    addresses?: ReadonlyArray<string>;
    resolverIds?: ReadonlyArray<string>;
    ownerId?: string;
  }) {
    super(init);
    this.aidName = init.aidName;
    this.addresses = init.addresses ?? [];
    this.resolverIds = init.resolverIds ?? [];
  }
}

/** @generalization ISLProfile (concrete witness) */
export class SLProfile extends FipaAclElement implements ISLProfile {
  readonly metaClass = 'SLProfile' as const;
  readonly umlMetaclass = 'Enumeration' as const;
  readonly ownedLiteralIds: ReadonlyArray<string>;
  constructor(init: {
    elementId: string;
    ownedLiteralIds: ReadonlyArray<string>;
    ownerId?: string;
  }) {
    super(init);
    this.ownedLiteralIds = init.ownedLiteralIds;
  }
}
